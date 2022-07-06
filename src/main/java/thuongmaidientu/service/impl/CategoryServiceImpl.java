package thuongmaidientu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thuongmaidientu.model.Category;
import thuongmaidientu.repository.CategoryReposirory;
import thuongmaidientu.service.CategoryService;

import java.util.Optional;
@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryReposirory categoryReposirory;
    @Override
    public Iterable<Category> findAll() {
        return categoryReposirory.findAll();
    }

    @Override
    public Optional<Category> findById(Long id) {
        return categoryReposirory.findById(id);
    }

    @Override
    public void save(Category category) {
        categoryReposirory.save(category);
    }

    @Override
    public void remove(Long id) {
        categoryReposirory.deleteById(id);
    }
}
