package thuongmaidientu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import thuongmaidientu.model.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
