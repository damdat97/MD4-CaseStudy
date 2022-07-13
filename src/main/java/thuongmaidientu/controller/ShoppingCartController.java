package thuongmaidientu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import thuongmaidientu.model.CartItem;
import thuongmaidientu.service.ShoppingCartService;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/shopping-cart")
public class ShoppingCartController {

    @Autowired
    private ShoppingCartService shoppingCartService;

    @GetMapping({"/{id}"})
    public ResponseEntity<Iterable<CartItem>> showShoppingCart(@PathVariable Long id) {
        return new ResponseEntity<>(shoppingCartService.findByUserId(id), HttpStatus.OK);
    }

    @GetMapping({"/cart/{id}"})
    public ResponseEntity<Optional<CartItem>> findCartItem(@PathVariable Long id) {
        return new ResponseEntity<>(shoppingCartService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CartItem> addToShoppingCart(@RequestBody CartItem cartItem) {
        Iterable<CartItem> listCart = shoppingCartService.findByUserId(cartItem.getUser().getId());
        for (CartItem item : listCart) {
            if (item.getProduct().getId().equals(cartItem.getProduct().getId())) {
                item.setQuantity(item.getQuantity() + cartItem.getQuantity());
                shoppingCartService.save(item);
                return new ResponseEntity<>(item, HttpStatus.OK);
            }
        }
        shoppingCartService.save(cartItem);
        return new ResponseEntity<>(cartItem, HttpStatus.OK);
    }

    @PutMapping({"/cart/{id}"})
    public ResponseEntity<CartItem> updateShoppingCart(@PathVariable Long id, @RequestBody CartItem cartItem) {
        Optional<CartItem> cartItemOptional = shoppingCartService.findById(id);
        if (!cartItemOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        cartItem.setId(cartItemOptional.get().getId());
        shoppingCartService.save(cartItem);
        return new ResponseEntity<>(cartItem, HttpStatus.OK);
    }

    @DeleteMapping({"/cart/{id}"})
    public ResponseEntity<CartItem> deleteShoppingCart(@PathVariable Long id) {
        shoppingCartService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}