export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Perfil',
    path: '/perfil',
    icon: 'card'
  },
  {
    text: 'Usuarios',
    icon: 'group',
    items: [
      {
        text: 'Clientes',
        path: '/display-data'
      },
      {
        text: 'Proveedores',
        path: ''
      }
    ]
  },
  {
    text: 'Facturacion',
    icon: 'money',
    items: [
      {
        text: 'Productos',
        path: '',
        icon: 'product'
      },
      {
        text: 'Ventas',
        path: '',
        icon: 'unselectall'
      },
      {
        text: 'Compras',
        path: '',
        icon: 'unselectall'
      },
    ]
  }
];
