package thuongmaidientu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thuongmaidientu.model.BillDetail;
import thuongmaidientu.repository.BillDetailRepository;
import thuongmaidientu.service.BillDetailService;

import java.util.Optional;
@Service
public class BillDetailServiceImpl implements BillDetailService {
    @Autowired
    private BillDetailRepository billDetailRepository;

    @Override
    public Iterable<BillDetail> findAll() {
        return billDetailRepository.findAll();
    }

    @Override
    public Optional<BillDetail> findById(Long id) {
        return billDetailRepository.findById(id);
    }

    @Override
    public void save(BillDetail billDetail) {
        billDetailRepository.save(billDetail);
    }

    @Override
    public void remove(Long id) {
        billDetailRepository.deleteById(id);
    }
}
