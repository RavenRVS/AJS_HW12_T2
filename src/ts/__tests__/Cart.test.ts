import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test('new card should be empty', () => {
    const cart = new Cart();
  
    cart.add(
    new Movie(
        1015,
        'Inception',
        'Inception',
        'IMAX',
        2010,
        'USA',
        'Your mind is the scene of the crime.',
        ['Action', 'Adventure', 'Sci-Fi'],
        148,
        1500
    )
  );
  
    expect(cart.items.length).toBe(1);
  });

  test('getTotalPrice returns the correct total price of items', () => {
    cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(
      new Movie(
        1015,
        'Inception',
        'Inception',
        'IMAX',
        2010,
        'USA',
        'Your mind is the scene of the crime.',
        ['Action', 'Adventure', 'Sci-Fi'],
        148,
        1500
      )
    );

    const totalPrice = cart.getTotalPrice();

    expect(totalPrice).toBe(4400);
  });

  test('getTotalPriceWithDiscount returns the correct total price with discount', () => {
    cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(
      new Movie(
        1015,
        'Inception',
        'Inception',
        'IMAX',
        2010,
        'USA',
        'Your mind is the scene of the crime.',
        ['Action', 'Adventure', 'Sci-Fi'],
        148,
        1500
      )
    );

    const totalPriceWithDiscount = cart.getTotalPriceWithDiscount(10);

    expect(totalPriceWithDiscount).toBe(3960);
  });

  test('removeItemById removes the item from the cart by id', () => {
    const book = new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225);
    const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    const movie = new Movie(
      1015,
      'Inception',
      'Inception',
      'IMAX',
      2010,
      'USA',
      'Your mind is the scene of the crime.',
      ['Action', 'Adventure', 'Sci-Fi'],
      148,
      1500
    );

    cart.add(book);
    cart.add(musicAlbum);
    cart.add(movie);

    expect(cart.items.length).toBe(3);

    cart.removeItemById(1008);

    expect(cart.items.length).toBe(2);
    expect(cart.items).toEqual([book, movie]);
  });
});

