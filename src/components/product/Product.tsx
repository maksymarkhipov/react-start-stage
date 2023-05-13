import { Card, CardContent, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';

import './Product.css';


export function Product() {
    return(
      <Card className="product">
          <CardContent className="product-content">
              <div className="category">
                  Smartphones
              </div>
              <div className="name">
                  Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"
              </div>
              <div className="image-container">
                  <img className="image"
                       src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                       alt="stuff" />
              </div>
              <div className="bottom">
                  <div className="price">
                      $1,200.00
                  </div>
                  <div className="btn-container">
                      <IconButton color="primary" aria-label="add to shopping cart">
                          <ShoppingBag />
                      </IconButton>
                  </div>
              </div>
          </CardContent>
      </Card>
    );
}