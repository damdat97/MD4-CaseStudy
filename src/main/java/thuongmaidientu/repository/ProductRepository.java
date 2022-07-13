package thuongmaidientu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import thuongmaidientu.model.CartItem;
import thuongmaidientu.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
    @Query(value = "select * from thuongmaidientu.product order by id desc limit 10;", nativeQuery = true)
    Iterable<Product> findTop5Newest();

    @Query(value = "select * from product\n" +
            "join category c on c.id = product.category_id\n" +
            "where c.id = 1;", nativeQuery = true)
    Iterable<Product> findWomenProduct();

    @Query(value = "select * from product\n" +
            "join category c on c.id = product.category_id\n" +
            "where c.id = 2;", nativeQuery = true)
    Iterable<Product> findAccessoryProduct();

    @Query(value = "select * from product\n" +
            "join category c on c.id = product.category_id\n" +
            "where c.id = 3;", nativeQuery = true)
    Iterable<Product> findMenProduct();

    @Query(value = "select * from product where price between :from and :to;", nativeQuery = true)
    Iterable<Product> findByPrice(@Param("from") int price, @Param("to") int to);

    Iterable<Product> findByUserId(Long id);
}
