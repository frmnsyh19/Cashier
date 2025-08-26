"use client";

import React from "react";

export const ButtonLoading = () => {
  return (
    <button className="btn" disabled>
      <span className="loading loading-spinner loading-md"></span>
    </button>
  );
};
