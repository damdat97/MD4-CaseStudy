package thuongmaidientu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import thuongmaidientu.model.JwtResponse;
import thuongmaidientu.model.Product;
import thuongmaidientu.model.Role;
import thuongmaidientu.model.User;
import thuongmaidientu.service.RoleService;
import thuongmaidientu.service.UserService;
import thuongmaidientu.service.impl.JwtService;
import thuongmaidientu.service.impl.RoleServiceImpl;
import thuongmaidientu.service.impl.UserServiceImpl;

import javax.validation.Valid;
import java.util.*;

@RestController
@PropertySource("classpath:application.properties")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private Environment env;

    @Autowired
    private AuthenticationManager authenticationManager;


    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @GetMapping("/users")
    public ResponseEntity<Iterable<User>> showAllUser() {
        Iterable<User> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/admin/users")
    public ResponseEntity<Iterable<User>> showAllUserByAdmin() {
        Iterable<User> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/admin/users/{id}")
    public ResponseEntity<Optional<User>> findById(@PathVariable Long id) {
        Optional<User> users = userService.findById(id);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody User user, BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Iterable<User> users = userService.findAll();
        for (User currentUser : users) {
            if (currentUser.getUsername().equals(user.getUsername())) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }
        if (!userService.isCorrectConfirmPassword(user)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (user.getRoles() != null) {
            Role role = roleService.findByName("ROLE_ADMIN");
            Set<Role> roles = new HashSet<>();
            roles.add(role);
            user.setRoles(roles);
        } else {
            Role role1 = roleService.findByName("ROLE_USER");
            Set<Role> roles1 = new HashSet<>();
            roles1.add(role1);
            user.setRoles(roles1);
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setConfirmPassword(passwordEncoder.encode(user.getConfirmPassword()));
        user.setStatus(true);
        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtService.generateTokenLogin(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        User currentUser = userService.findByUsername(user.getUsername());
        return ResponseEntity.ok(new JwtResponse(jwt, currentUser.getId(), userDetails.getUsername(), userDetails.getAuthorities()));
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getProfile(@PathVariable Long id) {
        Optional<User> userOptional = this.userService.findById(id);
        return userOptional.map(user -> new ResponseEntity<>(user, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUserProfile(@PathVariable Long id, @RequestBody User user) {
        Optional<User> userOptional = this.userService.findById(id);
        if (!userOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        user.setId(userOptional.get().getId());
        user.setUsername(userOptional.get().getUsername());
        user.setEnabled(userOptional.get().isEnabled());
        user.setPassword(userOptional.get().getPassword());
        user.setRoles(userOptional.get().getRoles());
        user.setConfirmPassword(userOptional.get().getConfirmPassword());

        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/admin/users/find-by-name")
    public ResponseEntity<Iterable<User>> findByName(@RequestParam(value = "name") String name) {
        return new ResponseEntity<>(userService.findByName(name), HttpStatus.OK);
    }

    @GetMapping("/admin/users/locked-user/{id}")
    public ResponseEntity<User> lockedUser(@PathVariable Long id) {
        Optional<User> userOptional = this.userService.lockedUser(id);
        return userOptional.map(user -> new ResponseEntity<>(user, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/admin/users/{id}")
    public ResponseEntity<User> updateUserProfileByAdmin(@PathVariable Long id, @RequestBody User user) {
        Optional<User> userOptionalByAdmin = this.userService.findById(id);
        if (!userOptionalByAdmin.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        user.setId(userOptionalByAdmin.get().getId());
        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/admin/users/roles")
    public ResponseEntity<Iterable<Role>> findAllRoles() {
        return new ResponseEntity<>(roleService.findAll(), HttpStatus.OK);
    }
}