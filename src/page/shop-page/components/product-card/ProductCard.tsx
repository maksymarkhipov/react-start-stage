import { Card, CardContent, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';

import './ProductCard.css';
import { Product } from '../../../../types/product';


export function ProductCard({data}: {data: Product}) {
    return(
      <Card className="product">
          <CardContent className="product-content">
              <div className="top">
                  <div className="category">
                      {data.category}
                  </div>
                  <div className="title-container">
                      <div className="title">
                          {data.title}
                      </div>
                  </div>
              </div>
              <div className="center">
                  <div className="image-container">
                      <img className="image"
                           src={data.image}
                           alt="stuff" />
                  </div>
              </div>
              <div className="bottom">
                  <div className="price">
                      ${data.price}
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