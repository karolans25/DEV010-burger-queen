export const BURGER_CONSTANTS = {
    roles: ['admin', 'waiter', 'chef'],
    menus: [
        {
            path: 'users',
            text: 'Users',
            icon: 'assignment_ind',
            roles: ['admin']
        },
        {
            path: 'products',
            text: 'Products',
            icon: 'card_giftcard',
            roles: ['admin']
        },
        {
            path: 'orders',
            text: 'Orders',
            icon: 'book',
            roles: ['admin', 'chef', 'waiter']
        },
        {
            path: 'newOrder',
            text: 'new Order',
            icon: 'shopping_cart',
            roles: ['waiter']
        }
    ]
};
