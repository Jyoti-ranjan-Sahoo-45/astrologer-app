"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Moon, Sun, Star, Sparkles, Heart, Coins, Briefcase, Calendar, Users, BookOpen } from "lucide-react"

const zodiacSigns = [
  {
    name: "Aries",
    symbol: "♈",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    color: "text-red-500",
    image: "/mystical-aries-fire.png",
  },
  {
    name: "Taurus",
    symbol: "♉",
    dates: "Apr 20 - May 20",
    element: "Earth",
    color: "text-green-500",
    image: "/mystical-taurus-earth.png",
  },
  {
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 - Jun 20",
    element: "Air",
    color: "text-yellow-500",
    image: "/mystical-gemini-air.png",
  },
  {
    name: "Cancer",
    symbol: "♋",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    color: "text-blue-500",
    image: "/mystical-cancer-crab.png",
  },
  {
    name: "Leo",
    symbol: "♌",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    color: "text-orange-500",
    image: "/mystical-leo-fire.png",
  },
  {
    name: "Virgo",
    symbol: "♍",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    color: "text-green-600",
    image: "/mystical-virgo-earth.png",
  },
  {
    name: "Libra",
    symbol: "♎",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    color: "text-pink-500",
    image: "/mystical-libra-air.png",
  },
  {
    name: "Scorpio",
    symbol: "♏",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    color: "text-purple-600",
    image: "/mystical-scorpio-water.png",
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    color: "text-indigo-500",
    image: "/mystical-sagittarius.png",
  },
  {
    name: "Capricorn",
    symbol: "♑",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    color: "text-gray-600",
    image: "/mystical-capricorn-earth.png",
  },
  {
    name: "Aquarius",
    symbol: "♒",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    color: "text-cyan-500",
    image: "/mystical-aquarius-air.png",
  },
  {
    name: "Pisces",
    symbol: "♓",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    color: "text-teal-500",
    image: "/mystical-pisces-water.png",
  },
]

const dailyHoroscopes = {
  Aries:
    "Today brings exciting opportunities for new beginnings. Your natural leadership will shine through in unexpected ways.",
  Taurus: "Focus on stability and comfort today. A financial opportunity may present itself through a trusted friend.",
  Gemini: "Communication is key today. Your wit and charm will open doors you never expected.",
  Cancer: "Trust your intuition in matters of the heart. Family connections bring unexpected joy.",
  Leo: "Your creativity is at its peak. Share your talents with the world and watch magic happen.",
  Virgo: "Attention to detail pays off today. A methodical approach will solve a lingering problem.",
  Libra: "Balance is essential today. Seek harmony in relationships and avoid making hasty decisions.",
  Scorpio: "Deep transformation is occurring. Embrace change and let go of what no longer serves you.",
  Sagittarius: "Adventure calls to you today. Expand your horizons through learning or travel.",
  Capricorn: "Hard work is about to pay off. Stay focused on your long-term goals.",
  Aquarius: "Innovation and originality are your superpowers today. Think outside the box.",
  Pisces: "Your compassion and empathy will guide you to help someone in need today.",
}

const compatibilityData = {
  "Aries-Leo": { score: 95, description: "A fiery and passionate match! Both signs share enthusiasm and energy." },
  "Taurus-Virgo": {
    score: 88,
    description: "Earth signs unite! Practical and stable relationship with deep understanding.",
  },
  "Gemini-Aquarius": { score: 92, description: "Air signs create intellectual harmony with great communication." },
  "Cancer-Pisces": { score: 90, description: "Water signs flow together with emotional depth and intuition." },
}

export default function AstrologerApp() {
  const [selectedSign, setSelectedSign] = useState<string>("")
  const [birthDate, setBirthDate] = useState<string>("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [firstSign, setFirstSign] = useState<string>("")
  const [secondSign, setSecondSign] = useState<string>("")
  const [compatibilityResult, setCompatibilityResult] = useState<any>(null)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const getZodiacFromDate = (date: string) => {
    const month = Number.parseInt(date.split("-")[1])
    const day = Number.parseInt(date.split("-")[2])

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries"
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus"
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini"
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer"
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo"
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo"
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra"
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio"
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius"
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn"
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius"
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces"
    return ""
  }

  const handleDateChange = (date: string) => {
    setBirthDate(date)
    const sign = getZodiacFromDate(date)
    setSelectedSign(sign)
  }

  const calculateCompatibility = () => {
    if (!firstSign || !secondSign) return

    const key = `${firstSign}-${secondSign}`
    const reverseKey = `${secondSign}-${firstSign}`

    let result =
      compatibilityData[key as keyof typeof compatibilityData] ||
      compatibilityData[reverseKey as keyof typeof compatibilityData]

    if (!result) {
      // Generate a random compatibility for demo purposes
      const score = Math.floor(Math.random() * 40) + 60 // 60-100 range
      result = {
        score,
        description: `${firstSign} and ${secondSign} have ${score > 80 ? "great" : score > 70 ? "good" : "moderate"} compatibility potential.`,
      }
    }

    setCompatibilityResult(result)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 mystical-gradient rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Celestial Astrologer</h1>
          </div>
          <Button variant="outline" size="sm" onClick={toggleDarkMode} className="gap-2 bg-transparent">
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {isDarkMode ? "Light" : "Dark"}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/cosmic-hero-background.png" alt="Cosmic background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-card/90 backdrop-blur-md rounded-lg p-8 zodiac-glow border border-primary/20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Discover Your Cosmic Destiny</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unlock the secrets of the stars with personalized horoscopes, zodiac insights, and celestial guidance
              tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input
                type="date"
                value={birthDate}
                onChange={(e) => handleDateChange(e.target.value)}
                className="flex-1"
                placeholder="Enter your birth date"
              />
              <Button className="mystical-gradient text-primary-foreground px-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Get Reading
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="horoscope" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="horoscope">
              <Calendar className="w-4 h-4 mr-2" />
              Daily Horoscope
            </TabsTrigger>
            <TabsTrigger value="zodiac">
              <BookOpen className="w-4 h-4 mr-2" />
              Zodiac Signs
            </TabsTrigger>
            <TabsTrigger value="compatibility">
              <Users className="w-4 h-4 mr-2" />
              Compatibility
            </TabsTrigger>
          </TabsList>

          {/* Daily Horoscope Tab */}
          <TabsContent value="horoscope" className="space-y-6">
            {selectedSign && (
              <Card className="zodiac-glow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      src={zodiacSigns.find((sign) => sign.name === selectedSign)?.image || "/placeholder.svg"}
                      alt={selectedSign}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">
                          {zodiacSigns.find((sign) => sign.name === selectedSign)?.symbol}
                        </span>
                        Your Daily Horoscope - {selectedSign}
                      </CardTitle>
                      <CardDescription>
                        {new Date().toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed mb-6">
                    {dailyHoroscopes[selectedSign as keyof typeof dailyHoroscopes]}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Heart className="w-6 h-6 mx-auto mb-2 text-red-500" />
                      <p className="text-sm font-medium">Love</p>
                      <p className="text-xs text-muted-foreground">★★★★☆</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Briefcase className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                      <p className="text-sm font-medium">Career</p>
                      <p className="text-xs text-muted-foreground">★★★☆☆</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Coins className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                      <p className="text-sm font-medium">Money</p>
                      <p className="text-xs text-muted-foreground">★★★★★</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Star className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                      <p className="text-sm font-medium">Luck</p>
                      <p className="text-xs text-muted-foreground">★★★★☆</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zodiacSigns.map((sign) => (
                <Card
                  key={sign.name}
                  className={`cursor-pointer transition-all hover:scale-105 overflow-hidden ${
                    selectedSign === sign.name ? "zodiac-glow ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedSign(sign.name)}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={sign.image || "/placeholder.svg"}
                      alt={sign.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className={`absolute bottom-2 left-2 text-3xl ${sign.color}`}>{sign.symbol}</div>
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{sign.name}</CardTitle>
                    <CardDescription>{sign.dates}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="mb-2">
                      {sign.element}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {dailyHoroscopes[sign.name as keyof typeof dailyHoroscopes].substring(0, 80)}...
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Zodiac Signs Tab */}
          <TabsContent value="zodiac" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">The Twelve Zodiac Signs</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the unique characteristics, elements, and traits of each zodiac sign to better understand
                yourself and others.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {zodiacSigns.map((sign) => (
                <Card key={sign.name} className="text-center hover:zodiac-glow transition-all overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={sign.image || "/placeholder.svg"}
                      alt={sign.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-4xl ${sign.color}`}>
                      {sign.symbol}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{sign.name}</CardTitle>
                    <CardDescription>{sign.dates}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="mb-4">
                      {sign.element} Sign
                    </Badge>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Compatibility Tab */}
          <TabsContent value="compatibility" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Zodiac Compatibility</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover how compatible you are with other zodiac signs in love, friendship, and business relationships.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Compatibility Calculator</CardTitle>
                <CardDescription className="text-center">
                  Select two zodiac signs to see their compatibility
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Sign</label>
                    <select
                      className="w-full p-2 border border-border rounded-md bg-background"
                      value={firstSign}
                      onChange={(e) => setFirstSign(e.target.value)}
                    >
                      <option value="">Select a sign</option>
                      {zodiacSigns.map((sign) => (
                        <option key={sign.name} value={sign.name}>
                          {sign.symbol} {sign.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Second Sign</label>
                    <select
                      className="w-full p-2 border border-border rounded-md bg-background"
                      value={secondSign}
                      onChange={(e) => setSecondSign(e.target.value)}
                    >
                      <option value="">Select a sign</option>
                      {zodiacSigns.map((sign) => (
                        <option key={sign.name} value={sign.name}>
                          {sign.symbol} {sign.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <Button
                  className="w-full mystical-gradient text-primary-foreground"
                  onClick={calculateCompatibility}
                  disabled={!firstSign || !secondSign}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Check Compatibility
                </Button>

                {compatibilityResult && (
                  <div className="mt-6 p-6 bg-muted/50 rounded-lg text-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <img
                        src={zodiacSigns.find((s) => s.name === firstSign)?.image || "/placeholder.svg"}
                        alt={firstSign}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      />
                      <Heart className="w-6 h-6 text-red-500" />
                      <img
                        src={zodiacSigns.find((s) => s.name === secondSign)?.image || "/placeholder.svg"}
                        alt={secondSign}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-2">
                      {firstSign} & {secondSign}
                    </h4>
                    <div className="text-3xl font-bold text-primary mb-2">{compatibilityResult.score}%</div>
                    <p className="text-muted-foreground">{compatibilityResult.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-6 mystical-gradient rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="font-bold">Celestial Astrologer</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your cosmic guide to understanding the mysteries of the universe
            </p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 Celestial Astrologer</span>
              <span>•</span>
              <span>Made with ✨ and cosmic energy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
