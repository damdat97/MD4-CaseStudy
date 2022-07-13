package thuongmaidientu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import thuongmaidientu.model.CartItem;
import thuongmaidientu.model.Product;
import thuongmaidientu.service.impl.ProductServiceImpl;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductServiceImpl productService;

    @GetMapping
    public ResponseEntity<Iterable<Product>> findAll() {
        return new ResponseEntity<>(productService.findAll(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Product> create(@RequestBody Product product) {
        productService.save(product);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id,@RequestBody Product product) {
        Optional<Product> productOptional = productService.findById(id);
        if (!productOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        product.setId(productOptional.get().getId());
        productService.save(product);
        return new ResponseEntity<>(product,HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Product>> showUserShop(@PathVariable Long id) {
        return new ResponseEntity<>(productService.findById(id),HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Product> delete(@PathVariable Long id) {
        productService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/find-top-5-newest")
    public ResponseEntity<Iterable<Product>> findTop5Newest() {
        return new ResponseEntity<>(productService.findTop5Newest(), HttpStatus.OK);
    }

    @GetMapping("/find-women-product")
    public ResponseEntity<Iterable<Product>> findWomenProduct() {
        return new ResponseEntity<>(productService.findWomenProduct(), HttpStatus.OK);
    }

    @GetMapping("/find-accessory-product")
    public ResponseEntity<Iterable<Product>> findAccessoryProduct() {
        return new ResponseEntity<>(productService.findAccessoryProduct(), HttpStatus.OK);
    }

    @GetMapping("/find-men-product")
    public ResponseEntity<Iterable<Product>> findManProduct() {
        return new ResponseEntity<>(productService.findMenProduct(), HttpStatus.OK);
    }

    @GetMapping("/find-by-price")
    public ResponseEntity<Iterable<Product>> findByPrice(@RequestParam(value = "from") int from, @RequestParam(value = "to") int to) {
        return new ResponseEntity<>(productService.findByPrice(from, to), HttpStatus.OK);
    }

    @GetMapping({"/find-my-shop/{id}"})
    public ResponseEntity<Iterable<Product>> showShoppingCart(@PathVariable Long id) {
        return new ResponseEntity<>(productService.findByUserId(id), HttpStatus.OK);
    }
}
