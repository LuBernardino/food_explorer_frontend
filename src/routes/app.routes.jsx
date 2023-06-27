import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { DishDetails } from '../pages/Dish/Details';
import { DishAdd } from '../pages/Dish/Add';
import { DishEdit } from '../pages/Dish/Edit';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dish/add' element={<DishAdd />} />
            <Route path='/dish/edit/:id' element={<DishEdit />} />
            <Route path='/dish/details/:id' element={<DishDetails />} />
        </Routes>
    );
}