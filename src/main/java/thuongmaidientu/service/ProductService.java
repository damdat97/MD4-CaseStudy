package thuongmaidientu.service;

import thuongmaidientu.model.Product;

public interface ProductService extends GenaralService<Product>{
    Iterable<Product> findTop5Newest();

    Iterable<Product> findWomenProduct();

    Iterable<Product> findAccessoryProduct();

    Iterable<Product> findMenProduct();

    Iterable<Product> findByPrice(int from, int to);
}
