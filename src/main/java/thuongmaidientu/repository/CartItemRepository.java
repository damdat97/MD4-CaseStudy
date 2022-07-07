package thuongmaidientu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import thuongmaidientu.model.CartItem;
import thuongmaidientu.model.User;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    Iterable<CartItem> findByUserId(Long id);
}
