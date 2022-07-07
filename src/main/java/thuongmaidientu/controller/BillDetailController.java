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

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/bill_details")
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
    @DeleteMapping("/{id}")
    public ResponseEntity<BillDetail>delete(@PathVariable Long idd) {
        BillDetail billDetail = billDetailService.findById(idd).get();
        billDetailService.remove(idd);
        Product product = billDetail.getProduct();
        product.setQuantity(product.getQuantity() + billDetail.getQuantity());
        productService.save(product);
        Bill bill = billDetail.getBill();
        int total = bill.getAmount() - product.getPrice() * billDetail.getQuantity();
        bill.setAmount(total);
        billService.save(bill);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<BillDetail> update(@PathVariable Long id,@PathVariable Long idd,@RequestBody BillDetail billDetail) {
        Optional<BillDetail> billDetailOptional = billDetailService.findById(idd);
        if (!billDetailOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        billDetail.setId(billDetailOptional.get().getId());
        billDetail.setBill(billDetailOptional.get().getBill());

        Product oldproduct = billDetailOptional.get().getProduct();
        oldproduct.setQuantity(oldproduct.getQuantity() + billDetailOptional.get().getQuantity());
        int money = oldproduct.getPrice() * billDetailOptional.get().getQuantity();
        productService.save(oldproduct);
        billDetailService.save(billDetail);
        BillDetail newBillDetail = billDetailService.findById(billDetail.getId()).get();
        Product newProduct = newBillDetail.getProduct();
        newProduct.setQuantity(newProduct.getQuantity()-newBillDetail.getQuantity());
        productService.save(newProduct);

        Bill newBill = newBillDetail.getBill();
        newBill.setAmount(newBill.getAmount()-money + newBillDetail.getQuantity() * newProduct.getPrice());
        billService.save(newBill);
        return new ResponseEntity<>(billDetailService.findById(billDetail.getId()).get(),HttpStatus.OK);

    }
}
