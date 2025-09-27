"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Menu, X, User, Briefcase, FolderOpen, Award, MessageCircle } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "portfolio", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "portfolio", label: "Portfolio", icon: FolderOpen },
    { id: "skills", label: "Skills", icon: Award },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">Muhammad Rama Refiando</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-blue-400 bg-blue-900/30"
                        : "text-gray-300 hover:text-white hover:bg-slate-700"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-blue-400 bg-blue-900/30"
                        : "text-gray-300 hover:text-white hover:bg-slate-700"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
              MR
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Muhammad Rama Refiando</h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-6">Junior Engineer 2 - Network & Telecommunications</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>ramarefiando35@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>0853 4385 8443</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Mamuju, Sulawesi Barat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Mahasiswa Informatika PJJ Telkom University dengan pengalaman magang 1 tahun di PLN Icon Plus Kantor
                Representatif Mamuju. Saat ini bekerja sebagai Junior Engineer 2 di PLN Icon Plus dengan fokus pada
                pengelolaan jaringan dan koordinasi tim. Disiplin, mampu bekerja mandiri maupun tim, serta memiliki
                komitmen berkarier di bidang Jaringan dan Telekomunikasi.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Pendidikan</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-white">Telkom University</h4>
                      <p className="text-blue-300">Informatika PJJ</p>
                      <p className="text-gray-400">2022 - Saat ini | IPK: 3.56</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-white">SMK Telkom Makassar</h4>
                      <p className="text-blue-300">Teknik Telekomunikasi</p>
                      <p className="text-gray-400">2018 - 2021 | Nilai: 97.27</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span>ramarefiando35@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span>0853 4385 8443</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      <span>Mamuju, Sulawesi Barat</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                      <span>linkedin.com/in/muhammadramarefiando</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pengalaman Kerja</h2>
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Junior Engineer 2</h3>
                    <p className="text-blue-300 font-medium">PLN Icon Plus - Mamuju, Indonesia</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">
                    Juni 2022 - Saat ini
                  </Badge>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>
                    • Memonitoring aktivasi layanan ritel Iconnet, mulai dari review calon pelanggan hingga pelanggan
                    berhasil dilakukan aktivasi
                  </li>
                  <li>
                    • Memastikan penggunaan Keselamatan dan Kesehatan Kerja (K3) pada mitra aktivasi dan pemeliharaan
                    layanan ritel Iconnet
                  </li>
                  <li>
                    • Melakukan pemeriksaan kualitas (Quality Check / QC) pekerjaan mitra aktivasi layanan ritel Iconnet
                  </li>
                  <li>• Memonitoring tiket pemeliharaan gangguan layanan ritel Iconnet</li>
                  <li>
                    • Melakukan konfigurasi dan pengcekan pada perangkat Optical Line Terminal (OLT) melalui aplikasi
                    TACACS
                  </li>
                  <li>• Melakukan konfigurasi dasar (basic configuration) pada Mikrotik menggunakan aplikasi Winbox</li>
                  <li>• Melakukan pekerjaan Customer Experience (Cusex) dan Care for Asset (CFA)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Magang</h3>
                    <p className="text-blue-300 font-medium">PLN Icon Plus - Mamuju, Indonesia</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">
                    Juni 2021 - Juni 2022
                  </Badge>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Melakukan aktivasi pemasangan baru layanan korporat</li>
                  <li>• Melakukan pemeliharaan link pengguna</li>
                  <li>• Melakukan aktivasi pemasangan baru layanan ritel Iconnet</li>
                  <li>• Melakukan pemeliharaan gangguan layanan ritel Iconnet</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Praktik Kerja Lapangan (PKL)</h3>
                    <p className="text-blue-300 font-medium">Telkom Witel Makassar - Makassar, Indonesia</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">
                    Maret 2020 - Mei 2020
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Portfolio Kerja</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Aktivasi dan Pemasangan</h3>
                <p className="text-gray-300">
                  Memonitoring aktivasi layanan ritel Iconnet, mulai dari review calon pelanggan hingga pelanggan
                  berhasil dilakukan aktivasi.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Quality Control</h3>
                <p className="text-gray-300">
                  Melakukan pemeriksaan kualitas (Quality Check / QC) pekerjaan mitra aktivasi layanan ritel Iconnet.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Customer Experience & Care For Asset</h3>
                <p className="text-gray-300">
                  Melakukan tindak lanjut kepada pelanggan yang berhenti berlangganan, proses dismantle perangkat, dan
                  monitoring aset jaringan seperti Box Optical Distribution Point (ODP).
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Pemeliharaan dan Troubleshooting</h3>
                <p className="text-gray-300">
                  Memonitoring tiket gangguan layanan ritel Iconnet dan melakukan troubleshooting pada Optical Line
                  Terminal (OLT) melalui aplikasi TACACS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Kemampuan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Manajemen Waktu",
                    "Mudah Beradaptasi",
                    "Kreatif",
                    "Problem Solving",
                    "Berpikir Kritis",
                    "Kepemimpinan",
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-blue-500 text-blue-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Hard Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Pemahaman Teknis Jaringan", "Troubleshooting Jaringan", "Desain Grafis"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-green-500 text-green-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Software Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Microsoft Office", "PuTTY (TACACS)", "Winbox", "CorelDRAW", "Adobe Photoshop"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-purple-500 text-purple-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Hubungi Saya</h2>
          <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <p className="text-gray-300 mb-6">
                Tertarik untuk berkolaborasi atau ingin mengetahui lebih lanjut tentang pengalaman saya? Jangan ragu
                untuk menghubungi saya!
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3 p-4 bg-slate-700/50 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">ramarefiando35@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-slate-700/50 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Telepon</p>
                    <p className="text-white">0853 4385 8443</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Muhammad Rama Refiando. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
