package thuongmaidientu.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import thuongmaidientu.model.Bill;
import thuongmaidientu.service.BillService;
import thuongmaidientu.service.impl.BillServiceImpl;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/bills")
public class BillController {
    @Autowired
    private BillServiceImpl billService;

    @GetMapping
    public ResponseEntity<Iterable<Bill>>findAll() {
        return new ResponseEntity<>(billService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Bill> create(@RequestBody Bill bill) {
        billService.save(bill);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Optional<Bill>> update(@PathVariable Long id,@RequestBody Bill bill) {
        Optional<Bill> billOptional = billService.findById(id);
        if (!billOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        bill.setId(billOptional.get().getId());
        billService.save(bill);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Bill> delete(@PathVariable Long id) {
        billService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Bill>> search(@PathVariable Long id) {
        return new ResponseEntity<>(billService.findById(id),HttpStatus.OK);
    }
}
