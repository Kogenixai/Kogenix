import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  Cell, LabelList,
} from "recharts";
import { Star, Users, ThumbsUp, Layers } from "lucide-react";
import { ReviewsWordCloud } from "./ReactWordcloud";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const ratingData = [
  { rating: "5 ★", count: 29, pct: 96.7, grad: ["#a78bfa", "#7c3aed"] },
  { rating: "4 ★", count: 1,  pct: 3.3,  grad: ["#60a5fa", "#2563eb"] },
];

const departmentData = [
  { dept: "CSE",     count: 7, grad: ["#a78bfa", "#7c3aed"] },
  { dept: "AI & DS", count: 6, grad: ["#60a5fa", "#2563eb"] },
  { dept: "AIDS",    count: 6, grad: ["#34d399", "#059669"] },
  { dept: "Others",  count: 6, grad: ["#fbbf24", "#d97706"] },
  { dept: "AIML",    count: 5, grad: ["#f87171", "#dc2626"] },
];

const DEPT_FLAT = ["#a78bfa", "#60a5fa", "#34d399", "#fbbf24", "#f87171"];

// ─── CUSTOM TOOLTIPS ──────────────────────────────────────────────────────────
const RatingTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{
      background: "rgba(10,10,20,0.96)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 12,
      padding: "10px 16px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
    }}>
      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, margin: 0 }}>{d.rating}</p>
      <p style={{ color: "#fff", fontSize: 20, fontWeight: 800, margin: "4px 0 0" }}>
        {d.count}{" "}
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
          participants · {d.pct}%
        </span>
      </p>
    </div>
  );
};

const DeptTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  const pct = Math.round((d.count / 30) * 100);
  return (
    <div style={{
      background: "rgba(10,10,20,0.96)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 12,
      padding: "10px 16px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
    }}>
      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, margin: 0 }}>{d.dept}</p>
      <p style={{ color: "#fff", fontSize: 20, fontWeight: 800, margin: "4px 0 0" }}>
        {d.count}{" "}
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
          participants · {pct}%
        </span>
      </p>
    </div>
  );
};

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, sub, star, color }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${color}18, transparent 65%)` }}
      />
      <div className="relative z-10">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
          style={{ background: `${color}22` }}
        >
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-black tracking-tight">{value}</span>
          {star && <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mb-0.5" />}
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
        <p className="text-[10px] font-bold text-muted-foreground mt-1.5 uppercase tracking-wider">{label}</p>
      </div>
    </motion.div>
  );
}

function PremiumCard({ title, badge, accentColor, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
    >
      <div
        className="h-[3px] w-full"
        style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}33)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: `linear-gradient(180deg, ${accentColor}08, transparent)` }}
      />
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-bold tracking-tight">{title}</h3>
          <span
            className="text-[10px] font-black uppercase tracking-[1.5px] px-3 py-1 rounded-full border"
            style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}14` }}
          >
            {badge}
          </span>
        </div>
        {children}
      </div>
    </motion.div>
  );
}

// ─── EXPORTED SECTION ─────────────────────────────────────────────────────────
export function FDPAnalyticsSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-10">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3"
      >
        <span className="inline-block text-[11px] font-black tracking-[2.5px] uppercase px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary">
          Live Analytics
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">FDP Session Analytics</h2>
        <p className="text-muted-foreground text-base max-w-lg mx-auto">
          Real insights collected from participant feedback across departments
        </p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Users,    label: "Total Responses", value: "30",   sub: "participants", color: "#a78bfa" },
          { icon: Star,     label: "Avg Rating",      value: "4.97", sub: "out of 5",     star: true, color: "#fbbf24" },
          { icon: ThumbsUp, label: "Recommend",       value: "93%",  sub: "said yes",     color: "#34d399" },
          { icon: Layers,   label: "Departments",     value: "5+",   sub: "represented",  color: "#60a5fa" },
        ].map((s, i) => <StatCard key={i} {...s} />)}
      </motion.div>

      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2">

        {/* Rating Distribution */}
        <PremiumCard title="Rating Distribution" badge="30 Responses" accentColor="#a78bfa">
          <div className="flex items-center justify-center gap-8 py-4 mb-2">
            <div className="text-center">
              <p className="text-5xl font-black tracking-tight tabular-nums" style={{ color: "#a78bfa" }}>96.7%</p>
              <p className="text-xs text-muted-foreground mt-1 font-semibold">Rated 5 Stars</p>
            </div>
            <div className="w-px h-14 bg-border" />
            <div className="text-center">
              <p className="text-5xl font-black tracking-tight tabular-nums" style={{ color: "#60a5fa" }}>3.3%</p>
              <p className="text-xs text-muted-foreground mt-1 font-semibold">Rated 4 Stars</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={170}>
            <BarChart data={ratingData} barCategoryGap="45%">
              <defs>
                {ratingData.map((r, i) => (
                  <linearGradient key={i} id={`rGradL${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor={r.grad[0]} />
                    <stop offset="100%" stopColor={r.grad[1]} />
                  </linearGradient>
                ))}
              </defs>
              <XAxis
                dataKey="rating"
                axisLine={false} tickLine={false}
                tick={{ fill: "var(--muted-foreground)", fontSize: 14, fontWeight: 700 }}
              />
              <YAxis hide />
              <Tooltip content={<RatingTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)", radius: 8 }} />
              <Bar dataKey="count" radius={[10, 10, 4, 4]} maxBarSize={90}>
                {ratingData.map((_, i) => (
                  <Cell key={i} fill={`url(#rGradL${i})`} />
                ))}
                <LabelList
                  dataKey="count"
                  position="top"
                  style={{ fill: "var(--foreground)", fontWeight: 800, fontSize: 15 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </PremiumCard>

        {/* Department Participants */}
        <PremiumCard title="Department Participants" badge="5 Departments" accentColor="#34d399">
          <div className="space-y-3 mb-5">
            {departmentData.map((d, i) => {
              const pct = Math.round((d.count / 30) * 100);
              return (
                <div key={i}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: DEPT_FLAT[i] }} />
                      <span className="font-semibold text-foreground text-xs">{d.dept}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-muted-foreground">{d.count}</span>
                      <span className="font-black tabular-nums" style={{ color: DEPT_FLAT[i] }}>{pct}%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted/50 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${d.grad[0]}, ${d.grad[1]})`,
                        boxShadow: `0 0 8px ${d.grad[0]}55`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <ResponsiveContainer width="100%" height={140}>
            <BarChart data={departmentData} layout="vertical" barCategoryGap="22%">
              <defs>
                {departmentData.map((d, i) => (
                  <linearGradient key={i} id={`dGradL${i}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"   stopColor={d.grad[0]} />
                    <stop offset="100%" stopColor={d.grad[1]} />
                  </linearGradient>
                ))}
              </defs>
              <XAxis type="number" hide />
              <YAxis
                type="category" dataKey="dept" width={56}
                axisLine={false} tickLine={false}
                tick={{ fill: "var(--muted-foreground)", fontSize: 11, fontWeight: 700 }}
              />
              <Tooltip content={<DeptTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
              <Bar dataKey="count" radius={[0, 8, 8, 0]} maxBarSize={16}>
                {departmentData.map((_, i) => (
                  <Cell key={i} fill={`url(#dGradL${i})`} />
                ))}
                <LabelList
                  dataKey="count"
                  position="right"
                  style={{ fill: "var(--foreground)", fontWeight: 700, fontSize: 12 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </PremiumCard>
      </div>

      {/* Word Cloud */}
      <PremiumCard title="Participant Feedback Word Cloud" badge="30 Participant Voices" accentColor="#f59e0b">
        <p className="text-center text-sm text-muted-foreground mb-5">
          Most frequently used words across all participant reviews — hover to reshuffle
        </p>
        <div
          className="relative rounded-xl overflow-hidden"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
        >
          <ReviewsWordCloud words={[]} />
        </div>
      </PremiumCard>

    </div>
  );
}
