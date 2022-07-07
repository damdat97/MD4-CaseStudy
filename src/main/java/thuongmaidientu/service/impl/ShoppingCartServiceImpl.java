package thuongmaidientu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thuongmaidientu.model.CartItem;
import thuongmaidientu.repository.CartItemRepository;
import thuongmaidientu.service.ShoppingCartService;

import java.util.Optional;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Override
    public Iterable<CartItem> findByUserId(Long id) {
        return cartItemRepository.findByUserId(id);
    }

    @Override
    public Iterable<CartItem> findAll() {
        return cartItemRepository.findAll();
    }

    @Override
    public Optional<CartItem> findById(Long id) {
        return cartItemRepository.findById(id);
    }

    @Override
    public void save(CartItem cartItem) {
        cartItemRepository.save(cartItem);
    }

    @Override
    public void remove(Long id) {
        cartItemRepository.deleteById(id);
    }
}
