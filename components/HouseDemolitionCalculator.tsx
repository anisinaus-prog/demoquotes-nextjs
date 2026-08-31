"use client";

import { useMemo, useState } from "react";

export default function HouseDemolitionCalculator() {
  const [postcode, setPostcode] = useState("");

  const [houseSize, setHouseSize] = useState(120);

  const [houseType, setHouseType] = useState("fibro");
  const [asbestos, setAsbestos] = useState("no");
  const [slope, setSlope] = useState("flat");
  const [pool, setPool] = useState("no");
  const [driveway, setDriveway] = useState("no");

  const [treeSmall, setTreeSmall] = useState(0);
  const [treeMedium, setTreeMedium] = useState(0);
  const [treeLarge, setTreeLarge] = useState(0);

  //----------------------------------------------------
  // Pricing
  //----------------------------------------------------

  const HOUSE_RATE = 138;

  const HOUSE_TYPE_COST = {
    brick: 1500,
    weatherboard: 0,
    fibro: 0,
  };

  const ASBESTOS_COST = {
    no: 0,
    yes: 1495,
    unsure: 745,
  };

  const SLOPE_FACTOR = {
    flat: 1,
    moderate: 1.10,
    steep: 1.20,
  };

  const POOL_COST = {
    no: 0,
    yes: 3990,
  };

  const DRIVEWAY_COST = {
    no: 0,
    yes: 1745,
  };

  //----------------------------------------------------

  function postcodeMultiplier(pc: string) {
    const code = parseInt(pc);

    if (isNaN(code)) return 1;

    if (code >= 2231 && code <= 2750) return 1;
    if (code >= 2151 && code <= 2200) return 1;
    if (code >= 2201 && code <= 2230) return 1.15;
    if (code >= 2070 && code <= 2150) return 1.20;
    if (code >= 2050 && code <= 2069) return 1.10;
    if (code >= 2000 && code <= 2049) return 1.20;

    return 1;
  }

  //----------------------------------------------------

  const total = useMemo(() => {
    let cost = houseSize * HOUSE_RATE;

    cost += HOUSE_TYPE_COST[houseType as keyof typeof HOUSE_TYPE_COST];

    cost += ASBESTOS_COST[asbestos as keyof typeof ASBESTOS_COST];

    cost += POOL_COST[pool as keyof typeof POOL_COST];

    cost += DRIVEWAY_COST[driveway as keyof typeof DRIVEWAY_COST];

    cost += treeSmall * 495;
    cost += treeMedium * 790;
    cost += treeLarge * 1490;

    cost *= SLOPE_FACTOR[slope as keyof typeof SLOPE_FACTOR];

    cost *= postcodeMultiplier(postcode);

    return Math.round(cost);
  }, [
    postcode,
    houseSize,
    houseType,
    asbestos,
    slope,
    pool,
    driveway,
    treeSmall,
    treeMedium,
    treeLarge,
  ]);

  //----------------------------------------------------

  return (
  <section className="bg-slate-100 py-20 lg:py-24">
  <div className="mx-auto max-w-5xl px-6 lg:px-8">

    {/* Section heading */}
    <div className="mx-auto mb-12 max-w-3xl text-center">

      <div className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">
        Free Demolition Estimate
      </div>

      <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        House Demolition Cost Calculator
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Get an estimated house demolition cost based on your
        property size, location and site conditions.
      </p>

    </div>


    {/* Calculator card */}
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">

      {/* Calculator header */}
      <div className="mb-8 border-b border-slate-200 pb-6">

        <h3 className="text-2xl font-bold text-slate-900">
          Enter Your Property Details
        </h3>

        <p className="mt-2 text-slate-500">
          Adjust the details below to see an estimated demolition cost.
        </p>

      </div>


      {/* Postcode */}
      <div className="mb-6">

        <label className="font-semibold text-slate-800">
          Property Postcode
        </label>

        <input
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
          placeholder="Enter postcode between 2000 and 2750"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />

        <p className="mt-2 text-sm text-slate-500">
          Enter your Sydney-area postcode to calculate the location adjustment.
        </p>

      </div>


      {/* House Size */}
      <div className="mb-7 rounded-2xl bg-slate-50 p-5">

        <div className="flex items-center justify-between">

          <label className="font-semibold text-slate-800">
            House Size
          </label>

          <span className="rounded-lg bg-orange-100 px-3 py-1 font-bold text-orange-700">
            {houseSize} m²
          </span>

        </div>

        <input
          type="range"
          min="100"
          max="500"
          value={houseSize}
          onChange={(e) => setHouseSize(Number(e.target.value))}
          className="mt-5 w-full accent-orange-600"
        />

        <div className="mt-2 flex justify-between text-xs text-slate-500">
          <span>100 m²</span>
          <span>500 m²</span>
        </div>

      </div>


      {/* Main options */}
      <div className="grid gap-5 md:grid-cols-2">

        {/* House Type */}
        <div>

          <label className="mb-2 block font-semibold text-slate-800">
            House Type
          </label>

          <select
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            value={houseType}
            onChange={(e) => setHouseType(e.target.value)}
          >
            <option value="fibro">Fibro</option>
            <option value="brick">Brick (+$1,500)</option>
            <option value="weatherboard">Weatherboard</option>
          </select>

        </div>


        {/* Asbestos */}
        <div>

          <label className="mb-2 block font-semibold text-slate-800">
            Asbestos
          </label>

          <select
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            value={asbestos}
            onChange={(e) => setAsbestos(e.target.value)}
          >
            <option value="no">No</option>
            <option value="yes">Yes (+$1,500)</option>
            <option value="unsure">Not Sure (+$750)</option>
          </select>

        </div>


        {/* Site Slope */}
        <div>

          <label className="mb-2 block font-semibold text-slate-800">
            Site Slope
          </label>

          <select
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            value={slope}
            onChange={(e) => setSlope(e.target.value)}
          >
            <option value="flat">Flat</option>
            <option value="moderate">Moderate (+10%)</option>
            <option value="steep">Steep (+20%)</option>
          </select>

        </div>


        {/* Swimming Pool */}
        <div>

          <label className="mb-2 block font-semibold text-slate-800">
            Swimming Pool
          </label>

          <select
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            value={pool}
            onChange={(e) => setPool(e.target.value)}
          >
            <option value="no">No</option>
            <option value="yes">Yes (+$4,000)</option>
          </select>

        </div>


        {/* Driveway */}
        <div className="md:col-span-2">

          <label className="mb-2 block font-semibold text-slate-800">
            Driveway Removal (&lt;80m²)
          </label>

          <select
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            value={driveway}
            onChange={(e) => setDriveway(e.target.value)}
          >
            <option value="no">No</option>
            <option value="yes">Yes (+$1,800)</option>
          </select>

        </div>

      </div>


      {/* Trees */}
      <div className="mt-7">

        <h3 className="mb-4 font-semibold text-slate-800">
          Tree Removal
        </h3>

        <div className="grid gap-5 md:grid-cols-3">

          <div>

            <label className="text-sm font-medium text-slate-600">
              Trees &lt;5m
            </label>

            <input
              type="number"
              min="0"
              value={treeSmall}
              onChange={(e) => setTreeSmall(Number(e.target.value))}
              className="mt-2 w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />

          </div>


          <div>

            <label className="text-sm font-medium text-slate-600">
              Trees 5–12m
            </label>

            <input
              type="number"
              min="0"
              value={treeMedium}
              onChange={(e) => setTreeMedium(Number(e.target.value))}
              className="mt-2 w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />

          </div>


          <div>

            <label className="text-sm font-medium text-slate-600">
              Trees &gt;12m
            </label>

            <input
              type="number"
              min="0"
              value={treeLarge}
              onChange={(e) => setTreeLarge(Number(e.target.value))}
              className="mt-2 w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />

          </div>

        </div>

      </div>


      {/* Result */}
      <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-center text-white shadow-xl">

        {postcode === '' ? (

          <div>

            <div className="text-sm font-semibold uppercase tracking-wider text-orange-400">
              Estimated Demolition Cost
            </div>

            <div className="mt-4 text-2xl font-bold sm:text-3xl">
              Enter your postcode to calculate
            </div>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400">
              Complete the property details above to receive an
              estimated demolition cost.
            </p>

          </div>

        ) : Number(postcode) >= 2000 &&
          Number(postcode) <= 2750 ? (

          <>

            <div className="text-sm font-semibold uppercase tracking-wider text-orange-400">
              Estimated Demolition Cost
            </div>

            <div className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
              ${total.toLocaleString()}
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Estimated cost based on the information provided.
            </p>

          </>

        ) : (

          <div>

            <div className="text-2xl font-bold">
              We can't provide an estimate for this postcode
            </div>

            <p className="mt-3 text-sm text-slate-400">
              Please enter a postcode between 2000 and 2750.
            </p>

          </div>

        )}

      </div>


      {/* Disclaimer */}
      <p className="mt-6 text-center text-xs leading-5 text-slate-500">
        This calculator provides an indicative estimate only. Final pricing
        may vary depending on site access, underground services,
        contamination, council requirements, waste disposal and other
        site-specific conditions.
      </p>

    </div>
  </div>
</section>
  );
}