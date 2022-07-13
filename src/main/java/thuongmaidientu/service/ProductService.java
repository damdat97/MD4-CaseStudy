package thuongmaidientu.service;

import thuongmaidientu.model.CartItem;
import thuongmaidientu.model.Product;

public interface ProductService extends GeneralService<Product>{
    Iterable<Product> findTop5Newest();

    Iterable<Product> findWomenProduct();

    Iterable<Product> findAccessoryProduct();

    Iterable<Product> findMenProduct();

    Iterable<Product> findByPrice(int from, int to);

    Iterable<Product> findByUserId(Long id);

    Iterable<Product> findShopByName(String name);
}
