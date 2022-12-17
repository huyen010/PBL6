const expres = require('express');
const morgan = require('morgan');

const staff = require('./Router/Staff');
const delivery = require('./Router/Delivery.js');

const productAdmin = require('./Router/ProductAdmin');
const categoryAdmin = require('./Router/CategoryAdmin');
const stockAdmin = require('./Router/StockAdmin');
const supplyAdmin = require('./Router/SupplyAdmin');
const productPublic = require('./Router/ProductPublic');
const address = require('./Router/Address');
const user = require('./Router/User');
const auth = require('./Router/Auth');
const cart = require('./Router/Cart');
const comment = require('./Router/Comment');
const bill = require('./Router/Bill');
const billAdmin = require('./Router/BillAdmin');
const rate = require('./Router/Rate');
const infor = require('./Router/Infor');
const inforAddress = require('./Router/InforAddress');
const paymentMethod = require('./Router/PaymentMethod');
const upload = require('./Router/Upload');


const port = 8088

const app = expres()
app.use(expres.json());
app.use(morgan('combined'))

app.use('/api/v1/cms/staff', staff);
app.use('/api/v1/cms/deliveries', delivery);

app.use('/api/v1/cms/products', productAdmin);
app.use('/api/v1/cms/categories', categoryAdmin);
app.use('/api/v1/cms/stock', stockAdmin);
app.use('/api/v1/cms/supplies', supplyAdmin);
app.use('/api/v1/web/products', productPublic);
app.use('/api/v1/web/address', address);
app.use('/api/v1/web/users', user);
app.use('/api/v1/web/auth', auth);
app.use('/api/v1/web/cart', cart);
app.use('/api/v1/web/comment', comment);
app.use('/api/v1/web/rate', rate);
app.use('/api/v1/web/bill', bill);
app.use('/api/v1/cms/bill', billAdmin);
app.use('/api/v1/web/infor', infor);
app.use('/api/v1/web/inforaddress', inforAddress);
app.use('/api/v1/web', upload);
app.use('/api/v1/web/paymentmethod', paymentMethod);


app.listen(port)
console.log(`API sudah aktif pada port ${port}`)
