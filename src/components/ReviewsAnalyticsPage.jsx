import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { Star, Users, ThumbsUp, Layers } from "lucide-react";
import React from "react";
import { ReviewsWordCloud } from "./ReactWordcloud";


const ratingData = [
  { rating: "5 ⭐", count: 29 },
  { rating: "4 ⭐", count: 1 }
];

const recommendationData = [
  { name: "Yes", value: 28 },
  { name: "Maybe", value: 2 }
];

const departmentData = [
  { dept: "CSE", count: 7 },
  { dept: "AI & DS", count: 6 },
  { dept: "AIML", count: 5 },
  { dept: "AIDS", count: 6 },
  { dept: "Others", count: 6 }
];

const CHART_COLORS = [ "#60a5fa", "#f87171", "#4ade80",   "#fde047"]; 
// red, blue, green, yellow

const reviewTexts = [
  "I learned about Agents how MCP Server gets connected",
  "Hands-on session very useful",
  "Gained knowledge about Gen AI",
  // add all reviews here or fetch dynamically from your API
];

const stopwords = ["the","and","to","of","a","in","is","we","for","on","with","it","this","very","so","can","be"];

const wordCounts = reviewTexts
  .join(" ")
  .toLowerCase()
  .split(/\s+/)
  .filter(word => !stopwords.includes(word))
  .reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

const words = Object.keys(wordCounts).map(key => ({ text: key, value: wordCounts[key] }));

export const ReviewsAnalyticsPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen px-6 py-16 bg-muted/30">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            FDP Session Analytics
          </h1>
          <p className="text-muted-foreground text-lg">
            Clean insights from participant reviews
          </p>
        </motion.div>

        {/* METRICS ROW */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <StatCard icon={Users} label="Total Responses" value="30+" />
          <StatCard icon={Star} label="Avg Rating" value="4.97" star />
          <StatCard icon={ThumbsUp} label="Recommend Yes" value="93%" />
          <StatCard icon={Layers} label="Departments" value="5+" />
        </motion.div>

        {/* CHART CARDS */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* RATING DISTRIBUTION */}
          <ChartCard title="Rating Distribution">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={ratingData}>
                <XAxis dataKey="rating" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" radius={[8, 8, 0, 0]}>
  {ratingData.map((entry, idx) => (
    <Cell key={idx} fill={CHART_COLORS[idx % CHART_COLORS.length]} />
  ))}
</Bar>

              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* RECOMMENDATION */}
          <ChartCard title="Recommendation Split">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
  data={recommendationData}
  dataKey="value"
  nameKey="name"
  innerRadius={50}
  outerRadius={80}
  startAngle={90}
  endAngle={450}
>
  {recommendationData.map((_, idx) => (
    <Cell key={idx} fill={CHART_COLORS[idx % CHART_COLORS.length]} />
  ))}
</Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* DEPARTMENT DISTRIBUTION */}
          <ChartCard title="Department Participants">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={departmentData}>
  <XAxis dataKey="dept" />
  <YAxis allowDecimals={false} />
  <Tooltip />
  <Bar dataKey="count" radius={[8, 8, 0, 0]}>
    {departmentData.map((_, idx) => (
      <Cell key={idx} fill={CHART_COLORS[idx % CHART_COLORS.length]} />
    ))}
  </Bar>
</BarChart>

            </ResponsiveContainer>
          </ChartCard>
<ChartCard title="Participant Feedback Word Cloud">
  <ReviewsWordCloud words={words} />
</ChartCard>

        </div>

      </div>
    </section>
  );
}

/* ----- COMPONENTS ----- */

function StatCard({ icon: Icon, label, value, star }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-surface p-4 rounded-2xl text-center shadow"
    >
      <Icon className="w-7 h-7 mx-auto mb-2 text-yellow-400" />
      <div className="flex items-center justify-center text-2xl font-semibold">
        {value}
        {star && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 ml-1" />}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}

function ChartCard({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-surface p-6 rounded-3xl shadow"
    >
      <h3 className="text-lg font-semibold mb-2 text-center">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}
