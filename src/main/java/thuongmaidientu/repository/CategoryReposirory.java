package thuongmaidientu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import thuongmaidientu.model.Category;

public interface CategoryReposirory extends JpaRepository<Category,Long> {
}
