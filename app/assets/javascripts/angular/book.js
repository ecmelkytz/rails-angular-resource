var app = angular.module("bookApp", ["ngResource"]);

app.factory("Book", function($resource) {
  return $resource("/books/:id.json", { id: "@id" },
    {
      create:  { method: 'POST' },
      index:   { method: 'GET', isArray: true },
      get:    { method: 'GET', isArray: false },
      update:  { method: 'PUT' },
      destroy: { method: 'DELETE' }
    }
  );
});

app.controller("ExpoCtrl",['$scope', 'Book', function($scope, Book) {
  $scope.books = Book.index();
  
  $scope.addBook = function() {
  	var attr = {};
    attr.title = $scope.book_title;
    attr.like = 0;
    newBook = Book.create(attr);
    $scope.books.push(newBook);
    $scope.book_title = "";
  }

  $scope.likeBook = function(index) {
    book =$scope.books[index];
    book.like += 1;
    Book.update({ id: book.id, like: book.like});
  }

  $scope.deleteBook = function(index) {
    book = $scope.books[index];
    Book.destroy(book);
    $scope.books.splice(index, 1);
  }
}]);