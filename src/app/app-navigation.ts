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
    path: '/usuarios'
  },
  {
    text: 'Facturacion',
    icon: 'money',
    items: [
      {
        text: 'Productos',
        path: '/productos',
        icon: 'product'
      },
      {
        text: 'Ventas/Compras',
        path: '/ventasYcompras',
        icon: 'unselectall'
      }
    ]
  }
];
