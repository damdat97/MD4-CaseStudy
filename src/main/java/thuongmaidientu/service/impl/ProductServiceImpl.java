package thuongmaidientu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thuongmaidientu.model.Product;
import thuongmaidientu.repository.ProductRepository;
import thuongmaidientu.service.ProductService;

import java.util.Optional;
@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public Iterable<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public void save(Product product) {
        productRepository.save(product);
    }

    @Override
    public void remove(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public Iterable<Product> findTop5Newest() {
        return productRepository.findTop5Newest();
    }

    @Override
    public Iterable<Product> findWomenProduct() {
        return productRepository.findWomenProduct();
    }

    @Override
    public Iterable<Product> findAccessoryProduct() {
        return productRepository.findAccessoryProduct();
    }

    @Override
    public Iterable<Product> findMenProduct() {
        return productRepository.findMenProduct();
    }

    @Override
    public Iterable<Product> findByPrice(int from, int to) {
        return productRepository.findByPrice(from, to);
    }

    @Override
    public Iterable<Product> findByUserId(Long id) {
        return productRepository.findByUserId(id);
    }
}
