package thuongmaidientu.service;

import thuongmaidientu.model.Product;

public interface ProductService extends GeneralService<Product> {
    Iterable<Product> findByUserId(Long id);
}
