import React, { useState } from 'react';
import { 
  Utensils, FileText, Activity, GraduationCap, ShoppingBag, 
  Plus, Trash2, Printer, PlusCircle, CheckCircle, RefreshCw, 
  Search, Users, AlertCircle, ShoppingCart, ArrowRight, DollarSign 
} from 'lucide-react';

export default function InteractiveDemo({ activeTab: propActiveTab, setActiveTab: propSetActiveTab }) {
  const [localActiveTab, setLocalActiveTab] = useState('restaurant');
  const activeTab = propActiveTab || localActiveTab;
  const setActiveTab = propSetActiveTab || setLocalActiveTab;

  // Tab Definitions
  const tabs = [
    { id: 'restaurant', name: 'Restaurant ERP', icon: Utensils, desc: 'Tables, order queue, and kitchen operations.' },
    { id: 'billing', name: 'Billing ERP', icon: FileText, desc: 'Point-of-sale invoice generation and financial analysis.' },
    { id: 'pharmacy', name: 'Pharmacy ERP', icon: Activity, desc: 'Prescriptions, inventory alerts, and stock management.' },
    { id: 'school', name: 'School ERP', icon: GraduationCap, desc: 'Student database, attendance, and performance tracking.' },
    { id: 'ecommerce', name: 'E-Commerce ERP', icon: ShoppingBag, desc: 'Storefront simulation, product catalog, and checkout.' }
  ];

  // ----------------------------------------------------
  // 1. RESTAURANT ERP STATE & LOGIC
  // ----------------------------------------------------
  const [restaurantOrders, setRestaurantOrders] = useState([
    { id: '101', table: 'Table 4', items: '2x Cheeseburger, 1x Fries', status: 'Cooking', time: '5m ago' },
    { id: '102', table: 'Table 12', items: '1x Margherita Pizza, 2x Coke', status: 'Ready', time: '1m ago' },
    { id: '103', table: 'Table 9', items: '1x Caesar Salad, 1x Pasta Carbonara', status: 'Served', time: '12m ago' }
  ]);
  const [selectedTable, setSelectedTable] = useState('Table 5');
  const [selectedItem, setSelectedItem] = useState('Cheeseburger Combo');
  
  const addRestaurantOrder = () => {
    const newOrder = {
      id: String(Math.floor(100 + Math.random() * 900)),
      table: selectedTable,
      items: selectedItem,
      status: 'Pending',
      time: 'Just now'
    };
    setRestaurantOrders([newOrder, ...restaurantOrders]);
  };

  const updateOrderStatus = (id, newStatus) => {
    setRestaurantOrders(restaurantOrders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  const deleteRestaurantOrder = (id) => {
    setRestaurantOrders(restaurantOrders.filter(o => o.id !== id));
  };

  // ----------------------------------------------------
  // 2. BILLING ERP STATE & LOGIC
  // ----------------------------------------------------
  const [billingItems, setBillingItems] = useState([
    { id: 1, name: 'Premium Cloud ERP License', qty: 1, price: 1500 },
    { id: 2, name: 'Database Setup & Migration', qty: 1, price: 450 },
    { id: 3, name: '24/7 Technical Support SLA', qty: 12, price: 99 }
  ]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState(1);
  const [newItemPrice, setNewItemPrice] = useState(100);
  const [invoicePaid, setInvoicePaid] = useState(false);

  const addBillingItem = (e) => {
    e.preventDefault();
    if (!newItemName) return;
    const item = {
      id: Date.now(),
      name: newItemName,
      qty: Number(newItemQty),
      price: Number(newItemPrice)
    };
    setBillingItems([...billingItems, item]);
    setNewItemName('');
    setNewItemQty(1);
    setNewItemPrice(100);
  };

  const removeBillingItem = (id) => {
    setBillingItems(billingItems.filter(item => item.id !== id));
  };

  const getSubtotal = () => billingItems.reduce((acc, item) => acc + (item.qty * item.price), 0);
  const getTax = () => getSubtotal() * 0.18; // 18% GST/VAT
  const getGrandTotal = () => getSubtotal() + getTax();

  // ----------------------------------------------------
  // 3. PHARMACY ERP STATE & LOGIC
  // ----------------------------------------------------
  const [pharmacyStock, setPharmacyStock] = useState([
    { code: 'PH-402', name: 'Paracetamol 500mg', category: 'Analgesic', stock: 45, unit: 'Tabs', expiry: '2027-10' },
    { code: 'PH-109', name: 'Amoxicillin 250mg', category: 'Antibiotic', stock: 8, unit: 'Syrup', expiry: '2026-09' },
    { code: 'PH-874', name: 'Ibuprofen 400mg', category: 'Anti-inflammatory', stock: 92, unit: 'Tabs', expiry: '2028-02' },
    { code: 'PH-521', name: 'Atorvastatin 20mg', category: 'Cardiovascular', stock: 3, unit: 'Tabs', expiry: '2027-01' },
    { code: 'PH-065', name: 'Metformin 850mg', category: 'Antidiabetic', stock: 120, unit: 'Tabs', expiry: '2026-12' }
  ]);
  const [searchMed, setSearchMed] = useState('');

  const adjustStock = (code, amount) => {
    setPharmacyStock(pharmacyStock.map(p => {
      if (p.code === code) {
        const nextStock = Math.max(0, p.stock + amount);
        return { ...p, stock: nextStock };
      }
      return p;
    }));
  };

  // ----------------------------------------------------
  // 4. SCHOOL ERP STATE & LOGIC
  // ----------------------------------------------------
  const [students, setStudents] = useState([
    { id: 'SCH-01', name: 'Aditya Baruah', grade: 'Class X', roll: '12', attendance: 'Present', performance: 'A+' },
    { id: 'SCH-02', name: 'Nisha Talukdar', grade: 'Class X', roll: '24', attendance: 'Present', performance: 'A' },
    { id: 'SCH-03', name: 'Deepjyoti Das', grade: 'Class IX', roll: '03', attendance: 'Absent', performance: 'B+' },
    { id: 'SCH-04', name: 'Pooja Kalita', grade: 'Class XI', roll: '45', attendance: 'Present', performance: 'A-' }
  ]);
  const [newStudName, setNewStudName] = useState('');
  const [newStudGrade, setNewStudGrade] = useState('Class X');
  const [newStudRoll, setNewStudRoll] = useState('');

  const enrollStudent = (e) => {
    e.preventDefault();
    if (!newStudName || !newStudRoll) return;
    const newStudent = {
      id: `SCH-${String(students.length + 1).padStart(2, '0')}`,
      name: newStudName,
      grade: newStudGrade,
      roll: newStudRoll,
      attendance: 'Present',
      performance: 'B'
    };
    setStudents([...students, newStudent]);
    setNewStudName('');
    setNewStudRoll('');
  };

  const toggleAttendance = (id) => {
    setStudents(students.map(s => s.id === id ? { 
      ...s, 
      attendance: s.attendance === 'Present' ? 'Absent' : 'Present' 
    } : s));
  };

  // ----------------------------------------------------
  // 5. E-COMMERCE ERP STATE & LOGIC
  // ----------------------------------------------------
  const productsCatalog = [
    { id: 'prod-1', name: 'Linkzen Smartwatch Neo', price: 199, image: '⌚', rating: 4.8 },
    { id: 'prod-2', name: 'Aero Buds Pro ANC', price: 99, image: '🎧', rating: 4.6 },
    { id: 'prod-3', name: 'CyberBoard Mechanical Keyboard', price: 149, image: '⌨️', rating: 4.9 },
    { id: 'prod-4', name: 'EnviroShield Backpack v3', price: 79, image: '🎒', rating: 4.5 }
  ];
  const [cart, setCart] = useState([]);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // cart, checkout, complete

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const updateCartQty = (id, amount) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const nextQty = item.qty + amount;
        return nextQty > 0 ? { ...item, qty: nextQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const getCartTotal = () => cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  // Render Sub-sections
  const renderRestaurantERP = () => (
    <div className="erp-inner animate-fade-in">
      <div className="erp-header-dashboard">
        <div className="title-area">
          <h4 className="erp-title-main">DineIn Master</h4>
          <p className="erp-subtitle-main">Restaurant Queue & Kitchen Display Console</p>
        </div>
        <div className="erp-stats-container">
          <div className="erp-stat-badge">
            <span className="pulse-dot pulse-cyan"></span>
            <span>Active Tables: 14 / 25</span>
          </div>
          <div className="erp-stat-badge highlight">
            <span className="pulse-dot pulse-orange"></span>
            <span>Queue: {restaurantOrders.filter(o => o.status !== 'Served').length} orders</span>
          </div>
          <div className="erp-stat-badge success">
            <span className="pulse-dot pulse-green"></span>
            <span>Kitchen Status: Optimal</span>
          </div>
        </div>
      </div>

      <div className="erp-dashboard-grid">
        {/* Order Simulator Controls */}
        <div className="erp-control-panel-card bg-glass">
          <div className="panel-header-section">
            <div className="panel-icon-wrap cyan-glow">
              <PlusCircle size={18} />
            </div>
            <div>
              <h5 className="panel-title-text">Table Simulator</h5>
              <p className="panel-subtitle-text">Fire live order tickets directly to the kitchen display screen.</p>
            </div>
          </div>
          
          <div className="panel-form-body">
            <div className="input-group-modern">
              <label className="label-modern">Select Target Table</label>
              <select value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)} className="select-modern">
                <option value="Table 1">Table 1 (2 Persons)</option>
                <option value="Table 4">Table 4 (4 Persons)</option>
                <option value="Table 5">Table 5 (Bar Counter)</option>
                <option value="Table 9">Table 9 (Family Room)</option>
                <option value="Table 12">Table 12 (Outdoor)</option>
              </select>
            </div>

            <div className="input-group-modern">
              <label className="label-modern">Select Order Combo</label>
              <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} className="select-modern">
                <option value="1x Cheeseburger Combo, 1x Sprite">🍔 Cheeseburger Combo</option>
                <option value="1x Premium Veggie Pizza, 2x Lime Soda">🍕 Premium Veggie Pizza</option>
                <option value="1x Creamy Fettuccine Pasta, 1x Red Wine">🍝 Creamy Pasta carbonara</option>
                <option value="1x Healthy Quinoa & Avocado Salad">🥗 Quinoa Avocado Salad</option>
                <option value="2x Spicy Chicken Wings, 1x Craft Beer">🍗 Spicy Chicken Wings Combo</option>
              </select>
            </div>

            <button className="btn-accent w-full mt-4" onClick={addRestaurantOrder}>
              <span>Submit Ticket to Kitchen</span> <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Live Kitchen Display (KDS) */}
        <div className="erp-display-panel-card bg-glass">
          <div className="panel-header-section line-bottom">
            <div className="panel-icon-wrap cyan-glow pulse-icon">
              <Activity size={18} />
            </div>
            <div>
              <h5 className="panel-title-text">Live Kitchen KDS Screen</h5>
              <p className="panel-subtitle-text">Active order queues being prepared in real time.</p>
            </div>
          </div>
          
          <div className="kds-list-container">
            {restaurantOrders.map(order => (
              <div key={order.id} className={`kds-card-modern status-${order.status.toLowerCase()}`}>
                <div className="kds-card-header-modern">
                  <span className="table-no-text">{order.table}</span>
                  <span className="order-id-badge">Order #{order.id}</span>
                </div>
                <div className="kds-card-body-modern">
                  <p className="items-list-text">{order.items}</p>
                  <span className="time-elapsed-text">{order.time}</span>
                </div>
                <div className="kds-card-actions-modern">
                  {order.status === 'Pending' && (
                    <button className="btn-small bg-orange" onClick={() => updateOrderStatus(order.id, 'Cooking')}>Start Cooking</button>
                  )}
                  {order.status === 'Cooking' && (
                    <button className="btn-small bg-green" onClick={() => updateOrderStatus(order.id, 'Ready')}>Mark Ready</button>
                  )}
                  {order.status === 'Ready' && (
                    <button className="btn-small bg-blue" onClick={() => updateOrderStatus(order.id, 'Served')}>Serve Order</button>
                  )}
                  {order.status === 'Served' && (
                    <span className="text-served-status"><CheckCircle size={14} /> Served & Settled</span>
                  )}
                  <button className="btn-icon-trash-modern" onClick={() => deleteRestaurantOrder(order.id)} aria-label="Delete order">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBillingERP = () => (
    <div className="erp-inner animate-fade-in">
      <div className="erp-header-dashboard">
        <div className="title-area">
          <h4 className="erp-title-main">Financify POS</h4>
          <p className="erp-subtitle-main">Billing & Digital Invoice Engine</p>
        </div>
        <div className="erp-stats-container">
          <div className="erp-stat-badge">
            <span className="pulse-dot pulse-purple"></span>
            <span>Invoiced Today: ₹62,450</span>
          </div>
          <div className="erp-stat-badge highlight">
            <span className="pulse-dot pulse-purple"></span>
            <span>Tax Rate: GST 18%</span>
          </div>
          <div className="erp-stat-badge success">
            <span className="pulse-dot pulse-green"></span>
            <span>Gateway: Connected</span>
          </div>
        </div>
      </div>

      <div className="erp-dashboard-grid">
        {/* Invoice Items Form */}
        <div className="erp-control-panel-card bg-glass">
          <div className="panel-header-section">
            <div className="panel-icon-wrap purple-glow">
              <PlusCircle size={18} />
            </div>
            <div>
              <h5 className="panel-title-text">Invoice Builder</h5>
              <p className="panel-subtitle-text">Append active service items to calculate digital tax receipts.</p>
            </div>
          </div>
          
          <form onSubmit={addBillingItem} className="panel-form-body">
            <div className="input-group-modern">
              <label className="label-modern">Product / Service Name</label>
              <input 
                type="text" 
                placeholder="e.g. Enterprise Consulting" 
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="input-modern"
              />
            </div>
            <div className="form-row-modern">
              <div className="input-group-modern flex-1">
                <label className="label-modern">Qty</label>
                <input 
                  type="number" 
                  min="1" 
                  value={newItemQty}
                  onChange={(e) => setNewItemQty(e.target.value)}
                  className="input-modern"
                />
              </div>
              <div className="input-group-modern flex-2">
                <label className="label-modern">Unit Price (₹)</label>
                <input 
                  type="number" 
                  min="1" 
                  value={newItemPrice}
                  onChange={(e) => setNewItemPrice(e.target.value)}
                  className="input-modern"
                />
              </div>
            </div>
            <button type="submit" className="btn-accent w-full mt-4">
              <span>Add Line Item</span> <Plus size={16} />
            </button>
          </form>
        </div>

        {/* Live Bill Output */}
        <div className="erp-display-panel-card bg-glass">
          <div className="panel-header-section line-bottom">
            <div className="panel-icon-wrap purple-glow">
              <FileText size={18} />
            </div>
            <div>
              <h5 className="panel-title-text">Live Tax Invoice</h5>
              <p className="panel-subtitle-text">Real-time ledger processing and receipt visualizer.</p>
            </div>
          </div>
          
          <div className="invoice-container-modern">
            <div className="invoice-header-modern">
              <div>
                <h6 className="invoice-brand">LINKZEN TECH</h6>
                <p className="invoice-small-desc">Barpeta, Assam</p>
              </div>
              <div className="text-right-modern">
                <h6 className="invoice-title-text">TAX INVOICE</h6>
                <p className="invoice-small-desc">Date: {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="invoice-body-modern">
              <table className="invoice-table-modern">
                <thead>
                  <tr>
                    <th>Item Description</th>
                    <th className="text-center">Qty</th>
                    <th className="text-right">Rate</th>
                    <th className="text-right">Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {billingItems.map(item => (
                    <tr key={item.id}>
                      <td className="item-name-cell">{item.name}</td>
                      <td className="text-center">{item.qty}</td>
                      <td className="text-right">₹{item.price}</td>
                      <td className="text-right">₹{item.qty * item.price}</td>
                      <td className="actions-cell">
                        <button className="btn-row-delete-modern" onClick={() => removeBillingItem(item.id)}>×</button>
                      </td>
                    </tr>
                  ))}
                  {billingItems.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center-placeholder">No items added to invoice</td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="invoice-summary-modern">
                <div className="summary-row-modern">
                  <span>Subtotal:</span>
                  <span>₹{getSubtotal().toFixed(2)}</span>
                </div>
                <div className="summary-row-modern">
                  <span>GST (18%):</span>
                  <span>₹{getTax().toFixed(2)}</span>
                </div>
                <div className="summary-row-modern grand-total-modern">
                  <span>Grand Total:</span>
                  <span>₹{getGrandTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="invoice-footer-modern">
              {invoicePaid ? (
                <div className="badge-paid-modern animate-pop-in">
                  <CheckCircle size={16} /> Invoice Paid & Settled
                </div>
              ) : (
                <div className="invoice-actions-modern">
                  <button className="btn-primary-modern flex-1" onClick={() => setInvoicePaid(true)}>
                    <DollarSign size={16} /> Process Payment
                  </button>
                  <button className="btn-secondary-modern" onClick={() => window.print()}>
                    <Printer size={16} /> Print
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPharmacyERP = () => {
    const filteredMeds = pharmacyStock.filter(m => 
      m.name.toLowerCase().includes(searchMed.toLowerCase()) || 
      m.category.toLowerCase().includes(searchMed.toLowerCase())
    );

    return (
      <div className="erp-inner animate-fade-in">
        <div className="erp-header-dashboard">
          <div className="title-area">
            <h4 className="erp-title-main">PharmaFlow</h4>
            <p className="erp-subtitle-main">Pharmacy & Inventory Stock ERP</p>
          </div>
          <div className="erp-stats-container">
            <div className="erp-stat-badge">
              <span className="pulse-dot pulse-cyan"></span>
              <span>Total SKUs: 1,420</span>
            </div>
            <div className="erp-stat-badge highlight warning">
              <span className="pulse-dot pulse-red"></span>
              <span>Low Stock: {pharmacyStock.filter(p => p.stock < 10).length} items</span>
            </div>
            <div className="erp-stat-badge success">
              <span className="pulse-dot pulse-green"></span>
              <span>Compliance: Active</span>
            </div>
          </div>
        </div>

        <div className="erp-search-bar-modern bg-glass">
          <div className="search-input-wrapper-modern">
            <Search size={16} className="search-icon-modern" />
            <input 
              type="text" 
              placeholder="Search by Medicine Name or Therapeutic Category..." 
              value={searchMed}
              onChange={(e) => setSearchMed(e.target.value)}
              className="search-field-modern"
            />
          </div>
        </div>

        <div className="med-inventory-card bg-glass">
          <table className="med-table-modern">
            <thead>
              <tr>
                <th>Code</th>
                <th>Medicine Name</th>
                <th>Therapeutic Class</th>
                <th>Expiry</th>
                <th className="text-center">Stock Level</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMeds.map(med => {
                const isLow = med.stock < 10;
                return (
                  <tr key={med.code} className={isLow ? 'row-alert-modern' : ''}>
                    <td><code className="code-modern">{med.code}</code></td>
                    <td>
                      <div className="med-name-cell-modern">
                        <span className="med-title">{med.name}</span>
                        {isLow && <span className="badge-alert-pill"><AlertCircle size={10} /> Low Stock</span>}
                      </div>
                    </td>
                    <td><span className="category-pill-modern">{med.category}</span></td>
                    <td><span className="expiry-text">{med.expiry}</span></td>
                    <td className="text-center">
                      <div className="stock-visualizer-modern">
                        <span className="stock-number-text">{med.stock} {med.unit}</span>
                        <div className="progress-track-modern">
                          <div 
                            className={`progress-fill-modern ${isLow ? 'bg-red-glow' : 'bg-green-glow'}`} 
                            style={{ width: `${Math.min(100, (med.stock / 120) * 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right actions-cell-modern">
                      <button className="btn-table-action-modern dispense" onClick={() => adjustStock(med.code, -10)}>
                        Dispense 10
                      </button>
                      <button className="btn-table-action-modern reorder" onClick={() => adjustStock(med.code, 50)}>
                        Restock (+50)
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderSchoolERP = () => (
    <div className="erp-inner animate-fade-in">
      <div className="erp-header-dashboard">
        <div className="title-area">
          <h4 className="erp-title-main">EduSuite</h4>
          <p className="erp-subtitle-main">Student Records & Classroom Administration</p>
        </div>
        <div className="erp-stats-container">
          <div className="erp-stat-badge">
            <span className="pulse-dot pulse-purple"></span>
            <span>Enrolled: {750 + students.length}</span>
          </div>
          <div className="erp-stat-badge highlight">
            <span className="pulse-dot pulse-purple"></span>
            <span>Classrooms: 18</span>
          </div>
          <div className="erp-stat-badge success">
            <span className="pulse-dot pulse-green"></span>
            <span>Attendance: {((students.filter(s => s.attendance === 'Present').length / students.length) * 100).toFixed(1)}%</span>
          </div>
        </div>
      </div>

      <div className="erp-dashboard-grid">
        {/* Student Enrollment Form */}
        <div className="erp-control-panel-card bg-glass">
          <div className="panel-header-section">
            <div className="panel-icon-wrap purple-glow">
              <PlusCircle size={18} />
            </div>
            <div>
              <h5 className="panel-title-text">Enroll Student</h5>
              <p className="panel-subtitle-text">Enroll new admissions into target classroom register.</p>
            </div>
          </div>
          
          <form onSubmit={enrollStudent} className="panel-form-body">
            <div className="input-group-modern">
              <label className="label-modern">Full Name</label>
              <input 
                type="text" 
                placeholder="e.g. Priyanshu Sharma" 
                value={newStudName}
                onChange={(e) => setNewStudName(e.target.value)}
                className="input-modern"
              />
            </div>
            <div className="form-row-modern">
              <div className="input-group-modern flex-1">
                <label className="label-modern">Grade/Class</label>
                <select value={newStudGrade} onChange={(e) => setNewStudGrade(e.target.value)} className="select-modern">
                  <option value="Class IX">Class IX</option>
                  <option value="Class X">Class X</option>
                  <option value="Class XI">Class XI</option>
                  <option value="Class XII">Class XII</option>
                </select>
              </div>
              <div className="input-group-modern flex-1">
                <label className="label-modern">Roll Number</label>
                <input 
                  type="text" 
                  placeholder="e.g. 05" 
                  value={newStudRoll}
                  onChange={(e) => setNewStudRoll(e.target.value)}
                  className="input-modern"
                />
              </div>
            </div>
            <button type="submit" className="btn-accent w-full mt-4">
              <span>Enroll Student</span> <Plus size={16} />
            </button>
          </form>
        </div>

        {/* Student Database Grid */}
        <div className="erp-display-panel-card bg-glass">
          <div className="panel-header-section line-bottom">
            <div className="panel-icon-wrap purple-glow">
              <Users size={18} />
            </div>
            <div>
              <h5 className="panel-title-text">Active Register</h5>
              <p className="panel-subtitle-text">Student compliance records and performance grades.</p>
            </div>
          </div>
          
          <div className="students-list-container">
            <table className="student-table-modern">
              <thead>
                <tr>
                  <th>Roll</th>
                  <th>Student Name</th>
                  <th>Class</th>
                  <th>Grade</th>
                  <th className="text-right">Attendance Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td><span className="roll-number-badge">{student.roll}</span></td>
                    <td><span className="student-name-text">{student.name}</span></td>
                    <td><span className="grade-class-text">{student.grade}</span></td>
                    <td>
                      <span className="badge-perf-pill">{student.performance}</span>
                    </td>
                    <td className="text-right">
                      <button 
                        onClick={() => toggleAttendance(student.id)}
                        className={`btn-attendance-toggle ${student.attendance === 'Present' ? 'present' : 'absent'}`}
                      >
                        <span className="status-dot"></span>
                        <span>{student.attendance}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderECommerceERP = () => (
    <div className="erp-inner animate-fade-in">
      <div className="erp-header-dashboard">
        <div className="title-area">
          <h4 className="erp-title-main">CartEngine</h4>
          <p className="erp-subtitle-main">E-Commerce Storefront & Order Pipelines</p>
        </div>
        <div className="erp-stats-container">
          <div className="erp-stat-badge">
            <span className="pulse-dot pulse-cyan"></span>
            <span>Conversion: 3.42%</span>
          </div>
          <div className="erp-stat-badge highlight">
            <span className="pulse-dot pulse-orange"></span>
            <span>Active Carts: {cart.length}</span>
          </div>
          <div className="erp-stat-badge success">
            <span className="pulse-dot pulse-green"></span>
            <span>Shoppers Live: 342</span>
          </div>
        </div>
      </div>

      {checkoutStep === 'cart' && (
        <div className="ecommerce-checkout-flow">
          <div className="shop-dashboard-grid">
            {/* Products catalog list */}
            <div className="catalog-panel-section">
              <h5 className="panel-title-text-mini">Product Catalog Preview</h5>
              <div className="catalog-products-grid">
                {productsCatalog.map(p => (
                  <div key={p.id} className="store-product-card bg-glass">
                    <span className="store-emoji-tag">{p.image}</span>
                    <h6 className="store-prod-title">{p.name}</h6>
                    <div className="store-prod-meta-row">
                      <span className="store-prod-price">${p.price}</span>
                      <span className="store-prod-rating">★ {p.rating}</span>
                    </div>
                    <button className="btn-add-to-cart-modern" onClick={() => addToCart(p)}>
                      <Plus size={14} /> Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Shopping Cart Drawer */}
            <div className="cart-panel-card bg-glass">
              <div className="cart-panel-header">
                <div className="cart-title-wrap">
                  <ShoppingCart size={16} />
                  <h5>Shopping Cart</h5>
                </div>
                <span className="cart-counter-badge">{cart.reduce((a, b) => a + b.qty, 0)} items</span>
              </div>

              <div className="cart-items-scrollable">
                {cart.map(item => (
                  <div key={item.id} className="cart-item-row-modern">
                    <span className="cart-item-emoji">{item.image}</span>
                    <div className="cart-item-meta">
                      <h6 className="cart-item-title">{item.name}</h6>
                      <p className="cart-item-price-text">${item.price} each</p>
                    </div>
                    <div className="cart-quantity-adjuster">
                      <button onClick={() => updateCartQty(item.id, -1)} className="adjust-btn">-</button>
                      <span className="qty-number-text">{item.qty}</span>
                      <button onClick={() => updateCartQty(item.id, 1)} className="adjust-btn">+</button>
                    </div>
                  </div>
                ))}
                {cart.length === 0 && (
                  <div className="empty-cart-display-modern">
                    <ShoppingCart size={32} />
                    <p>Your shopping cart is empty</p>
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="cart-summary-section-modern">
                  <div className="cart-subtotal-row">
                    <span>Cart Subtotal:</span>
                    <span className="subtotal-amount">${getCartTotal()}</span>
                  </div>
                  <button className="btn-checkout-modern w-full mt-4" onClick={() => setCheckoutStep('checkout')}>
                    <span>Proceed to Checkout</span> <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {checkoutStep === 'checkout' && (
        <div className="checkout-billing-card bg-glass animate-pop-in">
          <h5 className="checkout-headline-text">Interactive Secure Checkout</h5>
          <div className="checkout-dashboard-layout">
            <div className="shipping-info-section-modern">
              <h6 className="section-title-modern">1. Customer & Shipping details</h6>
              <div className="input-group-modern">
                <label className="label-modern">Contact Number</label>
                <input type="text" defaultValue="+91 6002552415" disabled className="input-modern disabled-modern" />
              </div>
              <div className="input-group-modern">
                <label className="label-modern">Shipping Address</label>
                <input type="text" defaultValue="Barpeta, Assam" disabled className="input-modern disabled-modern" />
              </div>
              <div className="input-group-modern">
                <label className="label-modern">Email Address</label>
                <input type="text" defaultValue="Linkzen@support.in" disabled className="input-modern disabled-modern" />
              </div>
            </div>

            <div className="order-summary-box-modern bg-glass">
              <h6 className="section-title-modern">2. Order Review</h6>
              <div className="checkout-items-list">
                {cart.map(item => (
                  <div key={item.id} className="checkout-summary-row-modern">
                    <span>{item.qty}x {item.name}</span>
                    <span>${item.qty * item.price}</span>
                  </div>
                ))}
              </div>
              <div className="summary-total-row-modern">
                <span>Grand Total:</span>
                <span>${getCartTotal()}</span>
              </div>
              <div className="checkout-btns-group mt-4">
                <button className="btn-back-modern" onClick={() => setCheckoutStep('cart')}>Modify Cart</button>
                <button className="btn-confirm-modern" onClick={() => setCheckoutStep('complete')}>Confirm & Pay</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {checkoutStep === 'complete' && (
        <div className="checkout-success-card bg-glass text-center animate-pop-in">
          <div className="success-icon-wrap-modern">
            <CheckCircle size={48} className="text-green-icon" />
          </div>
          <h3 className="success-heading-text">Order Received Successfully!</h3>
          <p className="success-body-text">Our E-commerce ERP has generated order ticket <strong>#LNZ-{Math.floor(100000 + Math.random() * 900000)}</strong> and sent an email notification to <strong>Linkzen@support.in</strong>.</p>
          <div className="action-row-modern mt-6">
            <button className="btn-primary-return" onClick={() => {
              setCart([]);
              setCheckoutStep('cart');
            }}>
              Return to Catalog
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="live-demo-section" id="interactive-demo">
      <div className="section-header text-center">
        <span className="badge">Interactive Experience Hub</span>
        <h2>Experience Our Live ERP Systems</h2>
        <p className="section-subtitle">
          Test drive fully functional simulations of our core enterprise software. Click any tab to toggle between platforms and test active modules.
        </p>
      </div>

      <div className={`demo-console-container theme-${activeTab}`}>
        {/* Tab Selection */}
        <div className="demo-tabs-bar">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`demo-tab-btn ${isActive ? 'active' : ''}`}
              >
                <div className="btn-content">
                  <div className="tab-icon-wrapper">
                    <Icon size={20} className="tab-icon" />
                  </div>
                  <div className="text-left-tab">
                    <span className="tab-name">{tab.name}</span>
                    <span className="tab-desc">{tab.desc}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Panel Render */}
        <div className="demo-panel bg-dark-glass">
          {activeTab === 'restaurant' && renderRestaurantERP()}
          {activeTab === 'billing' && renderBillingERP()}
          {activeTab === 'pharmacy' && renderPharmacyERP()}
          {activeTab === 'school' && renderSchoolERP()}
          {activeTab === 'ecommerce' && renderECommerceERP()}
        </div>
      </div>
    </section>
  );
}

