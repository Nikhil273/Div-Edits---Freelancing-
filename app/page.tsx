"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Play, Star, Mail, Phone, Instagram, Youtube, Linkedin, ChevronDown, Send, Pause } from "lucide-react"

export default function DarkPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleVideoPlay = (index: number) => {
    setPlayingVideo(index)
  }

  const handleVideoPause = (index: number) => {
    setPlayingVideo(null)
  }

  const tools = [
    { name: "Adobe Premiere Pro", icon: "Pr", color: "from-purple-500 to-pink-500" },
    { name: "Adobe After Effects", icon: "Ae", color: "from-blue-500 to-purple-500" },
    { name: "CapCut", icon: "CC", color: "from-green-500 to-blue-500" },
    { name: "Final Cut Pro", icon: "FC", color: "from-gray-500 to-gray-700" },
    { name: "DaVinci Resolve", icon: "Da", color: "from-orange-500 to-red-500" },
    { name: "VN", icon: "VN", color: "from-red-500 to-pink-500" },
  ]

  const portfolioItems = [
    {
      title: "YouTube Short for Tech Channel",
      views: "2.5M",
      type: "Short",
      videoSrc: "/videos/whatsapp-video-2025-06-06.mp4",
    },
    {
      title: "Instagram Reel - Fashion Brand",
      views: "1.8M",
      type: "Reel",
      videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title: "Documentary Trailer",
      views: "500K",
      type: "Documentary",
      videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      title: "Product Launch Video",
      views: "3.2M",
      type: "Commercial",
      videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      title: "Travel Vlog Highlights",
      views: "1.1M",
      type: "Vlog",
      videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      title: "Music Video Edit",
      views: "800K",
      type: "Music",
      videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
  ]

  const testimonials = [
    {
      name: "Alex Chen",
      role: "YouTuber (1M+ subscribers)",
      content:
        "Divyanshu's editing transformed my content completely. His attention to detail and quick turnaround time is unmatched.",
      rating: 5,
      videoSrc: "/videos/whatsapp-video-2025-06-06.mp4",
    },
    {
      name: "Sarah Martinez",
      role: "Brand Manager",
      content:
        "Working with Divyanshu has been incredible. He understands our vision instantly and delivers beyond expectations.",
      rating: 5,
      videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      name: "Mike Johnson",
      role: "Content Creator",
      content:
        "Divyanshu brings stories to life with his exceptional editing skills. Professional, creative, and delivered on time.",
      rating: 5,
      videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
  ]

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#121212]/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-white">Divyanshu Edits</span>
            <span className="text-[#FF3B3F]">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-[#FF3B3F] transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-[#FF3B3F] transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-300 hover:text-[#FF3B3F] transition-colors duration-300"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-300 hover:text-[#FF3B3F] transition-colors duration-300"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-[#FF3B3F] transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#FF3B3F] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#121212] border-t border-gray-800">
            <nav className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-300 hover:text-[#FF3B3F] transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-gray-300 hover:text-[#FF3B3F] transition-colors duration-300"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-gray-300 hover:text-[#FF3B3F] transition-colors duration-300"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-gray-300 hover:text-[#FF3B3F] transition-colors duration-300"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-300 hover:text-[#FF3B3F] transition-colors duration-300"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,59,63,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
                Hi, I'm <span className="text-[#FF3B3F]">Divyanshu</span> — a passionate video editor
              </h1>
              <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
                <p>with a sharp eye for storytelling and visuals.</p>
                <p>I specialize in editing short-form content, reels, and documentaries that truly engage audiences.</p>
                <p>
                  With experience across startups and creators, I bring ideas to life with precision and creativity.
                </p>
                <p className="text-white font-medium">Let's collaborate and create something impactful.</p>
              </div>
              <Button
                size="lg"
                className="bg-[#FF3B3F] hover:bg-[#e63339] text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF3B3F]/25"
                onClick={() => scrollToSection("contact")}
              >
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
            Skills & <span className="text-[#FF3B3F]">Tools</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-6">
              {tools.map((tool, index) => (
                <Card
                  key={index}
                  className="bg-[#2a2a2a] border-gray-700 hover:border-[#FF3B3F] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF3B3F]/10"
                >
                  <CardContent className="p-4 md:p-6 text-center">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${tool.color} rounded-lg mx-auto mb-3 md:mb-4 flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-lg md:text-xl">{tool.icon}</span>
                    </div>
                    <h3 className="font-semibold text-white text-sm md:text-base">{tool.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 md:py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-[#FF3B3F]">500+</span> Projects Completed
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              A showcase of my recent work across different platforms
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-[#2a2a2a] border-gray-700 overflow-hidden group hover:border-[#FF3B3F] transition-all duration-300"
                  onMouseEnter={() => setHoveredVideo(index)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                      <video
                        src={item.videoSrc}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onPlay={() => handleVideoPlay(index)}
                        onPause={() => handleVideoPause(index)}
                      />
                      <div
                        className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${hoveredVideo === index ? "opacity-100" : "opacity-0"}`}
                      >
                        {playingVideo === index ? (
                          <Pause className="w-8 h-8 md:w-12 md:h-12 text-[#FF3B3F]" />
                        ) : (
                          <Play className="w-8 h-8 md:w-12 md:h-12 text-[#FF3B3F]" />
                        )}
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-[#FF3B3F] text-white text-xs">{item.type}</Badge>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-semibold text-white text-base md:text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base">{item.views} views</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
            What <span className="text-[#FF3B3F]">Clients</span> Say
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-[#2a2a2a] border-gray-700 hover:border-[#FF3B3F] transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    {/* Video Element */}
                    <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <video
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                        src={testimonial.videoSrc}
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <Play className="w-12 h-12 text-[#FF3B3F]" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-[#FF3B3F] text-white text-xs">Testimonial</Badge>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FF3B3F] text-[#FF3B3F]" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 text-sm md:text-base italic line-clamp-3">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#FF3B3F] to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm md:text-base">{testimonial.name}</h4>
                        <p className="text-gray-400 text-xs md:text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
            Let's <span className="text-[#FF3B3F]">Connect</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">
                  Ready to create something amazing?
                </h3>
                <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                  Whether you need a compelling YouTube video, engaging social media content, or a powerful documentary,
                  I'm here to bring your vision to life with precision and creativity.
                </p>
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#FF3B3F] flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base break-all">divyanshu.editor@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#FF3B3F] flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">+91 98765 43210</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="p-2 md:p-3 bg-[#2a2a2a] text-gray-300 rounded-full hover:bg-[#FF3B3F] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Youtube className="w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                    <Link
                      href="#"
                      className="p-2 md:p-3 bg-[#2a2a2a] text-gray-300 rounded-full hover:bg-[#FF3B3F] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                    <Link
                      href="#"
                      className="p-2 md:p-3 bg-[#2a2a2a] text-gray-300 rounded-full hover:bg-[#FF3B3F] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                  </div>
                </div>
              </div>

              <Card className="bg-[#2a2a2a] border-gray-700">
                <CardContent className="p-4 md:p-6">
                  <form className="space-y-4 md:space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Name</label>
                      <Input
                        placeholder="Your full name"
                        className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#FF3B3F] focus:ring-[#FF3B3F] text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Email</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#FF3B3F] focus:ring-[#FF3B3F] text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Message</label>
                      <Textarea
                        placeholder="Tell me about your project, timeline, and vision..."
                        rows={4}
                        className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#FF3B3F] focus:ring-[#FF3B3F] text-sm md:text-base resize-none"
                      />
                    </div>
                    <Button className="w-full bg-[#FF3B3F] hover:bg-[#e63339] text-white transition-all duration-300 hover:scale-105 text-sm md:text-base">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Divyanshu</span>
              <span className="text-[#FF3B3F]">.</span>
            </div>
            <p className="text-gray-400 mb-6">Video Editor | Storyteller | Creative Professional</p>
            <div className="flex justify-center space-x-6 mb-8">
              <Link href="#" className="text-gray-400 hover:text-[#FF3B3F] transition-colors duration-300">
                <Youtube className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FF3B3F] transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FF3B3F] transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FF3B3F] transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">© {new Date().getFullYear()} Divyanshu Shukla. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
