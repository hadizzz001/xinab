"use client";

import { server } from "../../Utils/Server";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ColdData() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/cold1`);
        if (!res.ok) throw new Error("Failed to fetch data");

        const json = await res.json();
        setData(json.data); // Extract data array
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const items = data.length < 3 ? data : data.slice(0, 9);
  const emptySlots = 3 - items.length;

  return (
    <div className="example1">
      <style>
        {`
          .example1 {
            padding: 20px;
          }

          .example2 {
            text-align: center;
          }

          .example3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2px;
            justify-items: center;
          }

          .example4 {
            text-align: center;
            padding: 16px;
            width: 100%;
            max-width: 400px;
          }

          .example5 {
            width: 100%;
            max-width: 380px;
            height: 200px;
            object-fit: cover;
          }

          .example6 {
            font-size: 1.5em;
            margin: 16px 0;
          }

          .example7 {
            font-size: 1em;
            color: #666;
          }

          .example8 {
            margin-top: 12px;
            padding: 10px 20px;
            background-color: transparent;
            border-radius: 4px;
            color: #0794ca;
            border: 1px solid #0794ca;
            cursor: pointer;
          }

          /* Mobile Container to Prevent Overflow */
          .example9 {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 10px;
            max-width: 100%;
            overflow: hidden;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .example3 {
              grid-template-columns: 1fr; /* Each post takes a full row */
            }

            .example4 {
              max-width: 90%; /* Prevents content from overflowing */
            }
          }
        `}
      </style>

      <h1 className="example2">Posts</h1>
      <div className="example9">
        <div className="example3">
          {items.map((item, index) => (
            <div key={index} className="example4">
              <img src={item.images[0]} alt={item.title} className="example5" />
              <h2 className="example6">{item.title}</h2>
              <p className="example7">{item.description}</p>
              <Link href={`/posts/${item._id}`}>
                <button className="example8">Learn More</button>
              </Link>
            </div>
          ))}
          {items.length < 3 &&
            Array.from({ length: emptySlots }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
        </div>
      </div>
    </div>
  );
}
