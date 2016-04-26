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
