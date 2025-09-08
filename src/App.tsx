import { useState, useEffect } from "react";
import { Copy, RefreshCcw } from "lucide-react"; // icon library
import {motion, AnimatePresence} from 'framer-motion';
  // import {  WhatsApp, Facebook, TwitterIcon, } from "lucide-react";

type RizzCategory = "cute" | "funny" | "spicy" | "edgy";

interface RizzLine {
  text: string;
  category: RizzCategory;
}

  const rizzLines: RizzLine[] = [
    { text: "Are you a parking ticket? 'Cause you've got 'fine' written all over you.", category: "cute" },
    { text: "Do you believe in love at first sight, or should I walk by again?", category: "cute" },
    { text: "If you were a vegetable, you'd be a cute-cumber.", category: "funny" },
    { text: "Is your name Google? Because you have everything I've been searching for.", category: "cute" },
    { text: "Did it hurt when you fell from heaven?", category: "cute" },
    { text: "I'm not a photographer, but I can picture us together.", category: "cute" },
    { text: "Is your name Wi-Fi? Because I'm feeling a connection.", category: "funny" },
    { text: "I must be a snowflake, because I've fallen for you.", category: "cute" },
    { text: "Are you a keyboard? Because you're my type.", category: "funny" },
    { text: "Is your dad a baker? Because you're a cutie pie.", category: "cute" },
  {
      text: "Are you a parking ticket? 'Cause you've got 'fine' written all over you.",
      category: "cute"
    },
    {
      text: "Do you believe in love at first sight, or should I walk by again?",
      category: "cute"
    },
    {
      text: "If you were a vegetable, you'd be a cute-cumber.",
      category: "funny"
    },
    {
      text: "Is your name Google? Because you have everything I've been searching for.",
      category: "cute"
    },
    {
      text: "Did it hurt when you fell from heaven?",
      category: "cute"
    },
    {
      text: "I'm not a photographer, but I can picture us together.",
      category: "cute"
    },
    {
      text: "Is your name Wi-Fi? Because I'm feeling a connection.",
      category: "funny"
    },
    {
      text: "I must be a snowflake, because I've fallen for you.",
      category: "cute"
    },
    {
      text: "Are you a keyboard? Because you're my type.",
      category: "funny"
    },
    {
      text: "Is your dad a baker? Because you're a cutie pie.",
      category: "cute"
    },
    {
      text: "Do you have a map? Because I just got lost in your eyes.",
      category: "cute"
    },
    {
      text: "Can I buy you a drink? I’d like to see how good you are at swallowing.",
      category: "funny"
    },
    {
      text: "Kiss me if I’m wrong but, the earth is for sure flat.",
      category: "spicy"
    },
    {
      text: "You must be my lucky charm, because you’re magically delicious!",
      category: "spicy"
    },
    {
      text: "This date has been a big bowl of ‘frosted flakes’! It’s GRRRRRREAT!",
      category: "funny"
    },
    {
      text: "Where in Asia are you from? I can totally see myself in Ja-Panties!",
      category: "funny"
    },
    {
      text: "Hey, I’m sorry to bother you, but my phone must be broken because it doesn’t seem to have your number in it.",
      category: "spicy"
    },
    {
      text: "Do you believe in love at first sight? Or, do I have to walk by again?",
      category: "spicy"
    },
    {
      text: "Flip this coin! Mama’s got a 50/50 chance at getting some tail tonight.",
      category: "spicy"
    },
    {
      text: "Are you a toaster? Because I am looking for something to take a bath with tonight.",
      category: "funny"
    },
    {
      text: "You want to know my favorite tea? I’m looking at her, shawTea!",
      category: "spicy"
    },
    {
      text: "It doesn’t matter to me what you’ve got in your pants. Just as long as you can take what’s in mine!",
      category: "funny"
    },
    {
      text: "Ow! I just bit my lip. Can you kiss it and make it better?",
      category: "spicy"
    },
    {
      text: "I can’t taste my cherry lip gloss! Can you give it a try?",
      category: "spicy"
    },
    {
      text: "Hey boy, want to play shark attack? You eat! I-scream!",
      category: "funny"
    },
    {
      text: "I’m so jealous of your heart right now, because it’s pounding inside of you and I’m not.",
      category: "funny"
    },
    {
      text: "(follows behind a love interest for a while) Don’t mind me! I’m just following my dreams.",
      category: "spicy"
    },
    {
      text: "(approaching a hostess stand) I’d like to make reservations for two. “What time?” Whenever you’re free.",
      category: "spicy"
    },
    {
      text: "Is that a beaver I see, because GOD DAM!",
      category: "funny"
    },
    {
      text: "I’m not quite Jesus, I’m more of an apostle. I could never turn water into wine. But I bet I can turn you into mine.",
      category: "funny"
    },
    {
      text: "I don’t care if you’re vegan. I got the only meat you’ll ever need.",
      category: "funny"
    },
    {
      text: "Are you a construction worker? Because I see a dump truck back there! Cla-Clow!",
      category: "funny"
    },
    {
      text: "If you were a room in my house I’d make you the basement. So I could put kids inside you.",
      category: "funny"
    },
    {
      text: "Are you from France? Cause MaDAMN you fine!",
      category: "spicy"
    },
    {
      text: "I’m no cashier but you got a couple things on you I’d like to check out!",
      category: "spicy"
    },
    {
      text: "When I was a kid I used to have to chase butterflies. Now you’re over here bringing them right to me.",
      category: "cute"
    },
    {
      text: "If you’re a fruit, you’d be a FINEapple. If you were a vegetable, I’d be your life support.",
      category: "funny"
    },
    {
      text: "You want to know why I’m always thinking about you? Because my mom told me to think about my future.",
      category: "cute"
    },
    {
      text: "I always thought happiness started with the letter H. But my happiness starts with U.",
      category: "cute"
    },
    {
      text: "Are you part phone charger? Cause, I’m dying without you!",
      category: "cute"
    },
    {
      text: "Are you good at algebra? Because you could replace my ex without asking Y!",
      category: "cute"
    },
    {
      text: "Do you like soccer? My favorite player is Ronaldo, but we can get MESSI!",
      category: "funny"
    },
    {
      text: "I’d like to take you to the movies, but they don’t allow outside SNACKS.",
      category: "spicy"
    },
    {
      text: "I’m no waitress, but boy I’ll take your tip.",
      category: "spicy"
    },
    {
      text: "Can I take your picture? I need it to show Santa what I want for Christmas.",
      category: "cute"
    },
    {
      text: "Your body is 60% water, and I’m thirsty as FUCK.",
      category: "spicy"
    },
    {
      text: "Stop right there or I’m calling the cops! Because you stole my heart.",
      category: "cute"
    },
    {
      text: "ethplkkrf#4752! (What’s that?) The WiFi password for when you come over later.",
      category: "funny"
    },
    {
      text: "You’re so hot I just forgot my pickup line.",
      category: "cute"
    },
    {
      text: "I don’t subscribe to Netflix but I think we should make our own movie.",
      category: "spicy"
    },
    {
      text: "Of all four seasons you’re definitely winter, because soon you’ll be coming.",
      category: "funny"
    },
    {
      text: "Relationships should be 50/50. You give me your last name and I’ll scream out your first.",
      category: "spicy"
    },
    {
      text: "Hey boy, I just got some Boba Tea, but I bet it won’t be the last time I get balls in my mouth today.",
      category: "funny"
    },
    {
      text: "I got us sushi for dinner, but that won’t be the only thing we do raw tonight.",
      category: "funny"
    },
    {
      text: "I had sushi for lunch, it won’t be the last time I go down on something fishy today.",
      category: "funny"
    },
    {
      text: "You got no paper and no pencil but still you’re drawing my attention.",
      category: "cute"
    },
    {
      text: "That must be why the sky is so gray, all the color is in your eyes.",
      category: "cute"
    },
    {
      text: "Are you hiring? Because you look like you have a couple openings that need filling.",
      category: "funny"
    },
    {
      text: "Are you a subway sandwich artist? I’m hoping you can hook me up with a footlong!",
      category: "funny"
    },
    {
      text: "Right now you’re looking like my keyboard, because you’re just my type.",
      category: "funny"
    },
    {
      text: "Kissing is a love language. Want to start a conversation with me?",
      category: "cute"
    },
    {
      text: "Close your eyes and what do you see? (Nothing, Darkness, Black, etc.) That’s my life without you.",
      category: "cute"
    },
    {
      text: "My crush is ugly…without the GLY.",
      category: "cute"
    },
    {
      text: "You’re magnetic! My zipper is falling for you.",
      category: "spicy"
    },
    {
      text: "My therapist tells me I’m Type-A, because I’m always on top of things. How’d you like to be one of them?",
      category: "spicy"
    },
    {
      text: "You look like the scariest haunted house because I’m going to scream so loud when I’m inside you.",
      category: "spicy"
    },
    // The extra spicy ones you sent 👀
  {
      text: "Can I buy you a drink? I’d like to see how good you are at swallowing.",
      category: "funny"
    },
    {
      text: "Kiss me if I’m wrong but, the earth is for sure flat.",
      category: "spicy"
    },
    {
      text: "You must be my lucky charm, because you’re magically delicious!",
      category: "spicy"
    },
    {
      text: "This date has been a big bowl of ‘frosted flakes’! It’s GRRRRRREAT!",
      category: "funny"
    },
    {
      text: "Where in Asia are you from? I can totally see myself in Ja-Panties!",
      category: "funny"
    },
    {
      text: "Hey, I’m sorry to bother you, but my phone must be broken because it doesn’t seem to have your number in it.",
      category: "spicy"
    },
    {
      text: "Do you believe in love at first sight? Or, do I have to walk by again?",
      category: "spicy"
    },
    {
      text: "Flip this coin! Mama’s got a 50/50 chance at getting some tail tonight.",
      category: "spicy"
    },
    {
      text: "Are you a toaster? Because I am looking for something to take a bath with tonight.",
      category: "funny"
    },
    {
      text: "You want to know my favorite tea? I’m looking at her, shawTea!",
      category: "spicy"
    },
    {
      text: "It doesn’t matter to me what you’ve got in your pants. Just as long as you can take what’s in mine!",
      category: "funny"
    },
    {
      text: "Ow! I just bit my lip. Can you kiss it and make it better?",
      category: "spicy"
    },
    {
      text: "I can’t taste my cherry lip gloss! Can you give it a try?",
      category: "spicy"
    },
    {
      text: "Hey boy, want to play shark attack? You eat! I-scream!",
      category: "funny"
    },
    {
      text: "I’m so jealous of your heart right now, because it’s pounding inside of you and I’m not.",
      category: "funny"
    },
    {
      text: "(follows behind a love interest for a while) Don’t mind me! I’m just following my dreams.",
      category: "spicy"
    },
    {
      text: "(approaching a hostess stand) I’d like to make reservations for two. “What time?” Whenever you’re free.",
      category: "spicy"
    },
    {
      text: "Is that a beaver I see, because GOD DAM!",
      category: "funny"
    },
    {
      text: "I’m not quite Jesus, I’m more of an apostle. I could never turn water into wine. But I bet I can turn you into mine.",
      category: "funny"
    },
    {
      text: "I don’t care if you’re vegan. I got the only meat you’ll ever need.",
      category: "funny"
    },
    {
      text: "Are you a construction worker? Because I see a dump truck back there! Cla-Clow!",
      category: "funny"
    },
    {
      text: "If you were a room in my house I’d make you the basement. So I could put kids inside you.",
      category: "funny"
    },
    {
      text: "Are you from France? Cause MaDAMN you fine!",
      category: "spicy"
    },
    {
      text: "I’m no cashier but you got a couple things on you I’d like to check out!",
      category: "spicy"
    },
    {
      text: "When I was a kid I used to have to chase butterflies. Now you’re over here bringing them right to me.",
      category: "cute"
    },
    {
      text: "If you’re a fruit, you’d be a FINEapple. If you were a vegetable, I’d be your life support.",
      category: "funny"
    },
    {
      text: "You want to know why I’m always thinking about you? Because my mom told me to think about my future.",
      category: "cute"
    },
    {
      text: "I always thought happiness started with the letter H. But my happiness starts with U.",
      category: "cute"
    },
    {
      text: "Are you part phone charger? Cause, I’m dying without you!",
      category: "cute"
    },
    {
      text: "Are you good at algebra? Because you could replace my ex without asking Y!",
      category: "cute"
    },
    {
      text: "Do you like soccer? My favorite player is Ronaldo, but we can get MESSI!",
      category: "funny"
    },
    {
      text: "I’d like to take you to the movies, but they don’t allow outside SNACKS.",
      category: "spicy"
    },
    {
      text: "I’m no waitress, but boy I’ll take your tip.",
      category: "spicy"
    },
    {
      text: "Can I take your picture? I need it to show Santa what I want for Christmas.",
      category: "cute"
    },
    {
      text: "Your body is 60% water, and I’m thirsty as FUCK.",
      category: "spicy"
    },
    {
      text: "Stop right there or I’m calling the cops! Because you stole my heart.",
      category: "cute"
    },
    {
      text: "ethplkkrf#4752! (What’s that?) The WiFi password for when you come over later.",
      category: "funny"
    },
    {
      text: "You’re so hot I just forgot my pickup line.",
      category: "cute"
    },
    {
      text: "I don’t subscribe to Netflix but I think we should make our own movie.",
      category: "spicy"
    },
    {
      text: "Of all four seasons you’re definitely winter, because soon you’ll be coming.",
      category: "funny"
    },
    {
      text: "Relationships should be 50/50. You give me your last name and I’ll scream out your first.",
      category: "spicy"
    },
    {
      text: "Hey boy, I just got some Boba Tea, but I bet it won’t be the last time I get balls in my mouth today.",
      category: "funny"
    },
    {
      text: "I got us sushi for dinner, but that won’t be the only thing we do raw tonight.",
      category: "funny"
    },
    {
      text: "I had sushi for lunch, it won’t be the last time I go down on something fishy today.",
      category: "funny"
    },
    {
      text: "You got no paper and no pencil but still you’re drawing my attention.",
      category: "cute"
    },
    {
      text: "That must be why the sky is so gray, all the color is in your eyes.",
      category: "cute"
    },
    {
      text: "Are you hiring? Because you look like you have a couple openings that need filling.",
      category: "funny"
    },
    {
      text: "Are you a subway sandwich artist? I’m hoping you can hook me up with a footlong!",
      category: "funny"
    },
    {
      text: "Right now you’re looking like my keyboard, because you’re just my type.",
      category: "funny"
    },
    {
      text: "Kissing is a love language. Want to start a conversation with me?",
      category: "cute"
    },
    {
      text: "Close your eyes and what do you see? (Nothing, Darkness, Black, etc.) That’s my life without you.",
      category: "cute"
    }

  ];


const App = () => {
  const [currentRizz, setCurrentRizz] = useState<RizzLine | null>(null);
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  useEffect(() => {
    getRandomRizz();
  }, []);

  const getRandomRizz = () => {
    const randomIndex = Math.floor(Math.random() * rizzLines.length);
    setCurrentRizz(rizzLines[randomIndex]);
    setCopyButtonText("Copy");
  };

  const copyToClipboard = () => {
    if (navigator.clipboard && currentRizz) {
      navigator.clipboard.writeText(currentRizz.text).then(() => {
        setCopyButtonText("Copied!");
        setTimeout(() => setCopyButtonText("Copy"), 2000);
      });
    }
  };

  // share the rizz line syou enjoy..





  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500 p-6">
      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-8 animate-fade-in">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 drop-shadow-md">
          🎤 Rizz Generator
        </h1>

        {/* Rizz Display */}
       <div className="relative min-h-[120px] flex items-center justify-center text-center bg-white/40 rounded-2xl p-6 mb-8 shadow-inner">
  <AnimatePresence mode="wait">
    <motion.p
      key={currentRizz?.text} 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="text-2xl font-medium text-gray-900 leading-relaxed"
    >
      {currentRizz?.text || "Click below to get some smooth Rizz ✨"}
    </motion.p>
  </AnimatePresence>
          {currentRizz && (
            <span
              className={`absolute top-3 right-3 text-sm px-3 py-1 rounded-full font-semibold shadow-sm
              ${
                currentRizz.category === "cute"
                  ? "bg-pink-500/90 text-white"
                  : currentRizz.category === "funny"
                  ? "bg-yellow-600/90 text-white"
                  : currentRizz.category === "spicy"
                  ? "bg-red-600/90 text-white"
                  : "bg-gray-700/90 text-white"
              }`}
            >
              {currentRizz.category.toUpperCase()}
            </span>
          )}
        </div>

    {/* Buttons */}
<div className="grid grid-cols-2 gap-4">
  <button
    onClick={getRandomRizz}
    className="flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
  >
    <RefreshCcw className="w-5 h-5" /> New Rizz
  </button>
  <button
    onClick={copyToClipboard}
    className={`flex items-center justify-center gap-2 py-3 px-6 rounded-xl shadow-lg font-semibold transition-transform hover:scale-105 ${
      copyButtonText === "Copied!"
        ? "bg-green-500 text-white"
        : "bg-gray-900 text-white hover:bg-black"
    }`}
  >
    <Copy className="w-5 h-5" /> {copyButtonText}
  </button>
</div>

{/* Social Share Buttons */}
<div className="grid grid-cols-3 gap-4 mt-4">
  <button
    onClick={() => {
      if (!currentRizz) return;
      const text = encodeURIComponent(currentRizz.text);
      const url = encodeURIComponent(window.location.href);
      window.open(`https://wa.me/?text=${text}%20${url}`, "_blank");
    }}
    className="flex items-center justify-center gap-2 py-3 px-6 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
  >
    WhatsApp
  </button>

  <button
    onClick={() => {
      if (!currentRizz) return;
      const text = encodeURIComponent(currentRizz.text);
      const url = encodeURIComponent(window.location.href);
      window.open(`https://twitter.com/intent/tweet?text=${text}%20${url}`, "_blank");
    }}
    className="flex items-center justify-center gap-2 py-3 px-6 bg-sky-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
  >
    Twitter
  </button>

  <button
    onClick={() => {
      if (!currentRizz) return;
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
    }}
    className="flex items-center justify-center gap-2 py-3 px-6 bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
  >
    Facebook
  </button>
</div>

      </div>
{/* Footer */}
<footer className="mt-8 text-center text-sm text-gray-800/80 dark:text-gray-200/80">
  <p>
    Cooked with ❤️ by{" "}
    <a
      href="https://github.com/tejHacks"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold underline hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      @tejthedev
    </a>
  </p>
</footer>

    </div>
  );
};

export default App;
