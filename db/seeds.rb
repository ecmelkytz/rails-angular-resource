# encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Book.delete_all
Book.create(title: "Simyacı", like: 0)
Book.create(title: "Kürk Mantolu Madonna", like: 0)
Book.create(title: "Malcolm X", like: 0)
Book.create(title: "Angularjs", like: 0)