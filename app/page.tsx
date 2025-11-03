"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Star,
  Menu,
  X,
  ChefHat,
  Utensils,
  Heart
} from 'lucide-react';

export default function RestaurantPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState('appetizers');

  const menuCategories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = {
    appetizers: [
      { name: 'Truffle Arancini', description: 'Crispy risotto balls with truffle oil and parmesan', price: '$16', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Burrata Caprese', description: 'Fresh burrata with heirloom tomatoes and basil', price: '$18', image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Seared Scallops', description: 'Pan-seared scallops with cauliflower puree', price: '$22', image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    mains: [
      { name: 'Wagyu Ribeye', description: 'Grilled wagyu with roasted vegetables and red wine jus', price: '$65', image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Pan-Seared Salmon', description: 'Atlantic salmon with lemon herb butter and quinoa', price: '$32', image: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Duck Confit', description: 'Slow-cooked duck leg with cherry gastrique', price: '$38', image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    desserts: [
      { name: 'Chocolate Soufflé', description: 'Dark chocolate soufflé with vanilla bean ice cream', price: '$14', image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Tiramisu', description: 'Classic Italian tiramisu with espresso and mascarpone', price: '$12', image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Crème Brûlée', description: 'Vanilla custard with caramelized sugar crust', price: '$11', image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    beverages: [
      { name: 'Wine Selection', description: 'Curated wines from our sommelier', price: '$12-85', image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Craft Cocktails', description: 'Signature cocktails made with premium spirits', price: '$16-22', image: 'https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Artisan Coffee', description: 'Locally roasted coffee beans, various preparations', price: '$5-8', image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ]
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-amber-900">Buggie Restaurant</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-amber-600 transition-colors">
                Menu
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('menu')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
                  Menu
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Exceptional Dining
            <span className="block text-amber-400">Experience</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Where culinary artistry meets warm hospitality in the heart of the city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('menu')}
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
            >
              View Menu
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              Make Reservation
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crafted with the finest ingredients and passion for culinary excellence
            </p>
          </div>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveMenuCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeMenuCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeMenuCategory as keyof typeof menuItems].map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className="text-xl font-bold text-amber-600">{item.price}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2015, Bella Vista has been a cornerstone of fine dining in our community. 
                Our passion for exceptional cuisine and warm hospitality creates unforgettable experiences 
                for every guest who walks through our doors.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Led by Executive Chef Marco Rossi, our team sources the finest local ingredients 
                to create innovative dishes that celebrate both traditional techniques and modern creativity.
              </p>
              
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <Utensils className="h-12 w-12 text-amber-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-gray-600">Dishes</div>
                </div>
                <div>
                  <Star className="h-12 w-12 text-amber-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                  <div className="text-gray-600">Rating</div>
                </div>
                <div>
                  <Heart className="h-12 w-12 text-amber-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-gray-600">Happy Guests</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Chef cooking"
                className="rounded-lg shadow-lg aspect-square object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Restaurant interior"
                className="rounded-lg shadow-lg aspect-square object-cover mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team preparing food"
                className="rounded-lg shadow-lg aspect-square object-cover -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Restaurant ambiance"
                className="rounded-lg shadow-lg aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <p className="text-xl text-gray-600">We'd love to welcome you to  Buggie Restaurant</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">
                      123 Wuse Street<br />
                      Downtown District<br />
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Reservations</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">hello@buggierestaurant.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Reservation</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Party Size
                      </label>
                      <Input type="number" placeholder="2" min="1" max="12" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <Textarea 
                      placeholder="Any dietary restrictions or special occasions we should know about?"
                      rows={3}
                    />
                  </div>
                  
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                    Submit Reservation
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold"> Buggie Restaurant</span>
            </div>
            <p className="text-gray-400 mb-4">
              Exceptional dining experience in the heart of the city
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Buggie Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}