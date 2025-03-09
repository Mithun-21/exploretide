
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { toast } from "sonner";

// Using the same blog posts data from Blog.tsx
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  categories: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Must-Visit Hidden Gems in Bali",
    excerpt: "Discover the less-traveled paths of Bali that offer authentic experiences away from the tourist crowds.",
    content: "Bali, known as the Island of the Gods, is famous for its beautiful beaches, vibrant culture, and spiritual retreats. However, beyond the bustling tourist areas like Kuta, Seminyak, and Ubud, there are numerous hidden gems waiting to be explored.\n\nOne such gem is Sidemen Valley, a picturesque rural area in East Bali that offers stunning views of terraced rice fields with Mount Agung in the background. Unlike the more famous Tegallalang Rice Terraces, Sidemen remains relatively untouched by mass tourism, allowing visitors to experience the authentic Balinese agricultural lifestyle.\n\nAnother off-the-beaten-path destination is Amed, a coastal strip of villages in East Bali known for its black sand beaches and excellent snorkeling and diving spots. The Japanese shipwreck near Banyuning is a popular dive site teeming with marine life.\n\nFor those seeking spiritual experiences, Pura Lempuyang Temple, known as the 'Gateway to Heaven,' offers a less crowded alternative to the popular Besakih Temple. The temple complex consists of seven temples spread across the mountain, with the highest temple sitting at 1,775 meters above sea level.\n\nNature lovers should not miss Munduk, a highland area in the north-central part of Bali. With its cooler climate, lush forests, and numerous waterfalls, including Munduk Waterfall and Golden Valley Waterfall, it provides a refreshing escape from the island's heat.\n\nThe West Bali National Park, covering about 10% of Bali's total land area, is another hidden treasure. It's home to over 300 species of plants, 160 species of birds, and various mammals, including the endangered Bali Starling.\n\nFor beach enthusiasts looking to avoid crowds, Balian Beach on Bali's west coast offers a tranquil escape. Known for its black sand and great surfing conditions, it's a favorite among surfers seeking less crowded waves.\n\nThese hidden gems provide a glimpse into the authentic Bali, away from the tourist traps, allowing travelers to connect with the island's natural beauty, rich culture, and warm-hearted locals.",
    author: "Elena Rodriguez",
    date: "June 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
    categories: ["Destinations", "Travel Tips"]
  },
  {
    id: 2,
    title: "How to Travel Sustainably in 2023",
    excerpt: "Learn practical tips for reducing your environmental impact while still enjoying incredible travel experiences.",
    content: "Sustainable travel is no longer just a trend; it's becoming a necessity as we face the challenges of climate change and overtourism. Here are some practical tips for making your travels more environmentally friendly in 2023.\n\nChoose Eco-Friendly Transportation: Air travel is often unavoidable for long-distance trips, but consider taking direct flights when possible, as takeoffs and landings create the most carbon emissions. For shorter distances, opt for trains, buses, or even bicycles. Many cities worldwide have excellent public transportation systems or bike-sharing programs that not only reduce your carbon footprint but also offer a more immersive way to explore.\n\nStay at Sustainable Accommodations: Look for hotels and resorts with green certifications such as LEED, Green Key, or EarthCheck. These accommodations implement practices like water conservation, energy efficiency, and waste reduction. Alternatively, consider eco-lodges, which are designed to have minimal impact on the environment while supporting local communities.\n\nReduce Plastic Usage: Pack a reusable water bottle, shopping bag, and utensils to avoid single-use plastics during your travels. In areas where tap water isn't safe to drink, consider water purification methods like UV sterilization pens or water bottles with built-in filters.\n\nSupport Local Communities: Choose locally-owned restaurants, shops, and tour operators. This ensures that your tourism dollars directly benefit the local economy. Engage with community-based tourism initiatives, which often provide authentic cultural experiences while empowering local residents.\n\nRespect Wildlife and Natural Habitats: When visiting natural areas, stick to designated trails to prevent erosion and habitat destruction. Never feed or touch wild animals, and choose wildlife encounters that prioritize observation from a respectful distance rather than interaction or exploitation.\n\nConserve Resources: Treat your accommodations as you would your own home by turning off lights and air conditioning when not in use, reusing towels, and being mindful of water consumption, especially in regions facing water scarcity.\n\nLearn About Local Environmental Issues: Research the environmental challenges facing your destination and how you can minimize your impact. Some areas might be dealing with drought, coral reef degradation, or deforestation, and your actions as a traveler can either contribute to these problems or help alleviate them.\n\nBy implementing these sustainable travel practices, you can enjoy enriching travel experiences while helping to preserve our planet's natural and cultural treasures for future generations.",
    author: "David Chen",
    date: "May 22, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
    categories: ["Sustainable Travel", "Travel Tips"]
  },
  {
    id: 3,
    title: "A Culinary Journey Through Japan",
    excerpt: "Explore Japan's diverse food culture from street food to Michelin-starred restaurants and everything in between.",
    content: "Japan's culinary landscape is a fascinating blend of tradition, innovation, and regional diversity. From humble street food stalls to high-end restaurants with multiple Michelin stars, the country offers an incredible array of gastronomic experiences.\n\nTokyo, with its over 200 Michelin-starred restaurants, is often considered the food capital of the world. Here, you can experience everything from exquisite sushi at places like Sukiyabashi Jiro (made famous by the documentary 'Jiro Dreams of Sushi') to casual izakaya (Japanese pubs) serving yakitori (grilled chicken skewers) and other small plates designed to accompany drinks.\n\nStreet food in Japan is not only delicious but also a cultural experience. In Osaka, known as 'Japan's kitchen,' don't miss takoyaki (octopus-filled batter balls) and okonomiyaki (savory pancakes). In Hiroshima, try the local version of okonomiyaki, which is layered rather than mixed. Fukuoka is famous for its tonkotsu ramen, featuring a rich, pork-based broth, while Sapporo in Hokkaido is known for its miso ramen and fresh seafood.\n\nFor a unique dining experience, visit a traditional kaiseki restaurant, where you'll be served multiple courses of meticulously prepared dishes that emphasize seasonal ingredients and beautiful presentation. Each dish is designed to engage all five senses and showcase the chef's technical skills and creativity.\n\nJapan's regional cuisine, or kyodo ryori, offers insight into local traditions and available ingredients. In Kyoto, try yudofu (hot pot with tofu), reflecting the city's Buddhist heritage. In Okinawa, sample goya champuru (bitter melon stir-fry) and other dishes influenced by the island's unique history and subtropical climate.\n\nDon't overlook Japanese desserts, which are often less sweet than Western counterparts and frequently feature flavors like matcha (green tea), azuki (red bean), and sakura (cherry blossom). Seasonal wagashi (traditional Japanese sweets) are not only delicious but also works of art.\n\nTo truly appreciate Japanese cuisine, it's important to understand the concept of washoku, Japan's traditional dietary culture, which was recognized by UNESCO as an Intangible Cultural Heritage in 2013. Washoku emphasizes the harmony of flavors, the beauty of nature, the use of fresh seasonal ingredients, and the health benefits of the food.\n\nA culinary journey through Japan is not just about eating; it's about experiencing a culture that has elevated food to an art form, where even the simplest dishes reflect a deep respect for ingredients and a commitment to craftsmanship that is truly inspiring.",
    author: "Sarah Johnson",
    date: "April 10, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    categories: ["Food", "Destinations"]
  },
  {
    id: 4,
    title: "The Ultimate Packing List for Long-Term Travel",
    excerpt: "Everything you need to pack for a months-long journey, from essential gear to digital nomad tools.",
    content: "Preparing for long-term travel requires careful planning and strategic packing. Unlike a short vacation where you might manage with a few overpacking mistakes, extended travel demands efficiency and versatility in your packing choices.\n\nClothing: Pack for versatility rather than variety. Choose neutral colors that can be mixed and matched, and layers that can adapt to different weather conditions. Quick-dry, wrinkle-resistant fabrics are ideal. For a 3-month trip, consider: 5-7 t-shirts/tops, 2 long-sleeve shirts, 1-2 sweaters or light jackets, 2 pairs of pants (one should be jeans or something durable), 1-2 shorts/skirts, 1 dress outfit (if needed), 7 pairs of underwear, 5 pairs of socks, comfortable walking shoes, sandals, and possibly one dressier option. Remember, you can wash clothes as you go, so you don't need 90 days' worth of clothing!\n\nToiletries: Travel-sized items will eventually run out, so either pack full-sized products for essential items or be prepared to buy these on the go. Don't forget: toothbrush and paste, deodorant, shampoo/conditioner (or consider solid shampoo bars to save space), body wash, razor, personal hygiene items, basic first-aid supplies, prescription medications, and sunscreen.\n\nTechnology: For digital nomads or those wanting to stay connected, essential tech includes: a reliable laptop with protective case, smartphone with local SIM card or international plan, camera (if not using your phone), necessary chargers and adapters, portable power bank, headphones (noise-canceling if possible), and external hard drive or cloud storage for backing up photos and documents.\n\nTravel Documents: Keep digital and physical copies of: passport (with at least 6 months validity and empty pages), visas, travel insurance policy, driver's license or international driving permit, flight/transportation confirmations, accommodation details, bank statements or proof of funds (some countries require this), and emergency contact information.\n\nPractical Essentials: These items make long-term travel easier: a quality backpack or suitcase (preferably with lockable zippers), day pack for everyday use, travel towel (quick-dry microfiber), sleep aids (eye mask, earplugs), reusable water bottle, travel pillow, packing cubes for organization, laundry bag, basic sewing kit for repairs, and a small padlock for hostel lockers or securing your luggage.\n\nFinancial Preparedness: Carry multiple payment methods: 2-3 credit/debit cards (keep them separate in case one is lost or stolen), some cash in both local currency and USD/EUR for emergencies, and possibly a prepaid travel card. Consider setting up online banking for managing finances abroad.\n\nMost importantly, remember that most things can be purchased at your destination if necessary. The goal isn't to prepare for every conceivable scenario but to have what you need for comfort while maintaining mobility. Your most valuable assets for long-term travel are flexibility and a willingness to adapt to new situations as they arise.",
    author: "Mohammed Al-Fayed",
    date: "March 18, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    categories: ["Travel Tips", "Gear"]
  },
  {
    id: 5,
    title: "Top Wildlife Safaris in Africa for 2023",
    excerpt: "The most breathtaking wildlife encounters across Africa's diverse national parks and conservation areas.",
    content: "Africa's wildlife safaris offer some of the most incredible animal encounters on the planet. From witnessing the Great Migration in the Serengeti to tracking mountain gorillas in the misty forests of Rwanda, here are the top wildlife safari experiences to consider for 2023.\n\nMasai Mara National Reserve, Kenya: Famous for being part of the setting for the Great Migration where over two million wildebeest, zebras, and gazelles move between the Serengeti in Tanzania and the Masai Mara in Kenya. Visit between July and October to witness river crossings, where animals brave crocodile-infested waters. The Mara is also home to the 'Big Five' (lion, leopard, elephant, buffalo, and rhino) and offers excellent big cat sightings year-round.\n\nSerengeti National Park, Tanzania: The Serengeti's vast plains provide the other half of the Great Migration experience. From December to March, the southern Serengeti is where wildebeest calving occurs - an incredible wildlife spectacle. The park's diverse ecosystems support an astounding variety of wildlife beyond the migration, including cheetahs hunting on the open plains and leopards lounging in acacia trees.\n\nOkavango Delta, Botswana: This UNESCO World Heritage site is a unique inland delta where the Okavango River empties into the Kalahari Desert. During the annual flood (typically June to August), the delta becomes a lush animal habitat. Experience it by traditional mokoro (dugout canoe), which allows for quiet, close wildlife viewing of elephants, hippos, and numerous bird species. Moremi Game Reserve within the delta offers excellent predator sightings.\n\nKruger National Park, South Africa: One of Africa's largest and most accessible game reserves, Kruger offers an incredible diversity of wildlife with more than 140 mammal species and 500 bird species. The park has excellent infrastructure, making it suitable for self-drive safaris as well as guided experiences, from budget to ultra-luxury lodges in private concessions bordering the park.\n\nBwindi Impenetrable Forest, Uganda, and Volcanoes National Park, Rwanda: These parks offer the profound experience of gorilla trekking - hiking through misty mountain forests to spend an hour with a habituated family of endangered mountain gorillas. While permits are expensive (especially in Rwanda), the experience of observing these gentle giants in their natural habitat is unparalleled and contributes to their conservation.\n\nSouth Luangwa National Park, Zambia: Known as the birthplace of the walking safari, South Luangwa offers a more immersive wildlife experience. Walking safaris allow you to experience the details of the ecosystem - tracking animals, identifying plants, and learning about smaller creatures often missed from vehicles. The park is also known for its night drives, where you might spot nocturnal species like leopards, genets, and bushbabies.\n\nEtosha National Park, Namibia: Centered around a vast salt pan, Etosha offers a different kind of safari experience. During the dry season, animals concentrate around waterholes, creating natural gathering points where visitors can sit patiently and watch the wildlife come to them. The stark landscape provides excellent visibility and photographic opportunities, especially of desert-adapted species like oryx and springbok.\n\nWhen planning your African safari, consider factors like the season (wet vs. dry), your specific wildlife interests, budget, and desired level of comfort. Many of these destinations are committed to conservation and community development, so your tourism dollars can make a positive impact while you experience the incredible wildlife of Africa.",
    author: "Elena Rodriguez",
    date: "February 5, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    categories: ["Destinations", "Wildlife"]
  },
  {
    id: 6,
    title: "Budget Travel: How to See the World for Less",
    excerpt: "Expert strategies for maximizing your travel experiences while minimizing costs.",
    content: "Traveling on a budget doesn't mean sacrificing meaningful experiences. With strategic planning and a flexible mindset, you can explore the world without breaking the bank. Here are expert tips for budget-friendly travel in today's economy.\n\nFlight Strategies: Flight costs often represent the largest expense in a travel budget. Use fare comparison tools like Google Flights, Skyscanner, or Momondo to find the best deals. Be flexible with your travel dates and consider the shoulder season (just before or after peak season) when prices are lower but weather is still favorable. Sign up for fare alert emails, and consider budget airlines for shorter routes. Accumulating and strategically using airline miles can also significantly reduce flight costs.\n\nAccommodation Alternatives: Look beyond traditional hotels to save on accommodation. Hostels have evolved beyond bare-bones dorms and many now offer private rooms with en-suite bathrooms at a fraction of hotel prices. Vacation rentals through platforms like Airbnb or VRBO can be economical, especially for longer stays or group travel. For the adventurous, house-sitting (caring for someone's home while they're away) or home exchanges can provide free accommodation. In many destinations, family-run guesthouses offer authentic experiences at reasonable prices.\n\nEat Like a Local: Food costs can add up quickly when traveling. Save money by shopping at local markets and preparing some of your own meals, even if it's just breakfast. When dining out, lunch specials are typically cheaper than dinner, and restaurants filled with locals (rather than tourists) often offer better value. Street food can be both delicious and economical – just ensure it's prepared hygienically. In many European countries, prix-fixe menus provide multi-course meals at a set price that's often cheaper than ordering items separately.\n\nSmart Transportation: Research transportation passes that offer unlimited travel on public transit for a set period, which are often cheaper than individual tickets. In some cities, bike-sharing programs provide an economical and enjoyable way to explore. For longer distances within a country or region, investigate bus and train options, which are frequently cheaper than flying or renting a car. When renting vehicles, compare prices across different companies and book in advance for the best rates.\n\nFree and Low-Cost Experiences: Many world-class museums offer free admission on certain days or evenings. Walking tours (often tip-based) provide cultural and historical insights at minimal cost. Research free festivals, concerts, and events happening during your visit. Nature experiences like hiking, beaches, and public parks offer meaningful travel experiences that cost nothing. Connect with locals through platforms like Couchsurfing or Meetup for authentic cultural exchanges beyond the typical tourist experience.\n\nMoney Management: Use credit cards with no foreign transaction fees and bank accounts that refund ATM fees. Inform your bank of your travel plans to prevent your cards from being flagged for suspicious activity. In some destinations, negotiating prices for souvenirs, services, and even accommodation is expected – research local customs around haggling before your trip. Track your spending with a travel budget app to avoid financial surprises.\n\nDestination Selection: Consider countries where your currency goes further. Southeast Asia, parts of Latin America, and Eastern Europe offer incredible experiences at a fraction of the cost of Western Europe or North America. Within more expensive countries, smaller towns often provide similar cultural experiences to major cities at lower prices.\n\nWith thoughtful planning and a focus on experiences rather than luxury, budget travel can be deeply rewarding. Often, the money-saving approaches – taking public transit, shopping at local markets, staying in neighborhoods outside tourist centers – lead to more authentic and meaningful travel experiences than following a conventional, higher-cost itinerary.",
    author: "David Chen",
    date: "January 20, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
    categories: ["Budget Travel", "Travel Tips"]
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = parseInt(id || '0');
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === postId);
  
  // If no post is found, show a message and a button to go back to the blog list
  if (!post) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="text-3xl font-bold mb-6">Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Function to handle sharing the post
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          toast.success("Link copied to clipboard!");
        })
        .catch(() => {
          toast.error("Failed to copy link");
        });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-96 w-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${post.image})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="container-custom relative z-10 -mt-24">
          <Card className="p-6 md:p-10 shadow-xl">
            <Button 
              variant="ghost"
              size="sm"
              className="mb-4 hover:bg-transparent p-0 h-auto text-primary"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                >
                  <Tag className="h-3 w-3 inline mr-1" />
                  {category}
                </span>
              ))}
            </div>
            
            <Separator className="mb-6" />
            
            {/* Blog Content */}
            <CardContent className="px-0 pb-0">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </CardContent>
            
            {/* Share Button */}
            <div className="mt-8 flex justify-end">
              <Button 
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="flex items-center"
              >
                <Share2 className="h-4 w-4 mr-1" />
                Share Article
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Related Articles */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter(relatedPost => 
                relatedPost.id !== post.id && 
                relatedPost.categories.some(cat => post.categories.includes(cat))
              )
              .slice(0, 3)
              .map(relatedPost => (
                <Card key={relatedPost.id} className="hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">
                      <Link to={`/blog/${relatedPost.id}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{relatedPost.date} · {relatedPost.readTime}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
