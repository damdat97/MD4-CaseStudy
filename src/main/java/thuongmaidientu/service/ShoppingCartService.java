package thuongmaidientu.service;

import thuongmaidientu.model.CartItem;

public interface ShoppingCartService extends GeneralService<CartItem> {
    Iterable<CartItem> findByUserId(Long id);
}
