import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";



export default function ChatApp() {
  const supabase = createClient('https://tumllaiwozqzxnerccpe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1bWxsYWl3b3pxenhuZXJjY3BlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxNjYzNjksImV4cCI6MjA1Mzc0MjM2OX0.VPD-QgDLyi71Wnt5ogKslXUYRn_3G3YnFyJfqFnBYAQ');
  const [countries, setCountries] = useState([]);
  

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data as any);

  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <ul>
      {countries.map((country, i) => (
        <li key={i}>{country}</li>
      ))}
    </ul>
  );
}

