import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Nike Dunk Low Next Nature Homer Simpson',
    desc: 'Nike Dunk Low ',
    price: '$111.00',

  },
  {
    name: 'Jordan 4 Retro University Blue ',
    desc: 'Jordan Brand',
    price: '$270.00',
  },
  {
    name: 'Jordan 4 Retro White Oreo ',
    desc: 'Jordan Brand',
    price: '$240.00',
  },
  {
    name: 'Jordan 1 Mid Light Smoke Grey Anthracite',
    desc: 'Jordan Brand',
    price: '$198.00',
  },
  { name: 'Shipping', desc: '', price: '+4.99' },
];

const addresses = ['51 Smith Drive', 'Reactville', 'Downtown', '82613', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Ahmir Whitfield' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-6439' },
  { name: 'Expiry date', detail: '08/2027' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} /> 
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $823.99
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Ahmir Whitfield</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}