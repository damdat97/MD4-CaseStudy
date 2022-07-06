package thuongmaidientu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import thuongmaidientu.model.Bill;
import thuongmaidientu.model.BillDetail;
import thuongmaidientu.model.Product;
import thuongmaidientu.service.impl.BillDetailServiceImpl;
import thuongmaidientu.service.impl.BillServiceImpl;
import thuongmaidientu.service.impl.ProductServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("/bill-details")
public class BillDetailController {
    @Autowired
    private BillDetailServiceImpl billDetailService;
    @Autowired
    private BillServiceImpl billService;
    @Autowired
    private ProductServiceImpl productService;

    @PostMapping
    public ResponseEntity<BillDetail> create(@PathVariable Long id,@RequestBody BillDetail billDetail) {
        billDetail.setBill(billService.findById(id).get());
        billDetailService.save(billDetail);
        Product product = billDetail.getProduct();
        product.setQuantity(product.getQuantity()-billDetail.getQuantity());
        productService.save(product);
        Bill bill = billDetail.getBill();
        int total = bill.getAmount() + product.getPrice() + billDetail.getQuantity();
        bill.setAmount(total);
        billService.save(bill);
        return new ResponseEntity<>(billDetail, HttpStatus.CREATED);
    }
}
