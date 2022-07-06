package thuongmaidientu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import thuongmaidientu.model.Bill;

public interface BillRepository extends JpaRepository<Bill,Long> {
}
