package thuongmaidientu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thuongmaidientu.model.Bill;
import thuongmaidientu.repository.BillRepository;
import thuongmaidientu.service.BillService;

import java.util.Optional;
@Service
public class BillServiceImpl implements BillService {

    @Autowired
    private BillRepository billRepository;
    @Override
    public Iterable<Bill> findAll() {
        return billRepository.findAll();
    }

    @Override
    public Optional<Bill> findById(Long id) {
        return billRepository.findById(id);
    }

    @Override
    public void save(Bill bill) {
        billRepository.save(bill);
    }

    @Override
    public void remove(Long id) {
        billRepository.deleteById(id);
    }
}
