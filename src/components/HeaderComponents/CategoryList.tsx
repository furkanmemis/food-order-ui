import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import API from "../../services/api-services";
import { Category } from "../../Models/Category";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CategoryList: React.FC = () => {
  const category_api_service = new API("category/");
  const [allCategory, setAllCategory] = useState<Category[]>([]);

  const getAllCategories = async () => {
    try {
      const response = await category_api_service.get("get-all-category");
      setAllCategory(response as Category[]);
    } catch (error) {
      console.log("get category error");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        minHeight: "12vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid size={12} sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          style={{
            color: "darkslateblue",
            fontFamily: "monospace",
            fontSize: 24,
          }}
        >
          All Categories
        </Typography>
      </Grid>

      <Grid size={12} container>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={8}
          navigation
        >
          {allCategory.length > 0 && allCategory ? (
            allCategory.map((category, index) => (
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "0px",
                  height: "100%", // Ensure it takes up full height for centering
                }}
              >
                <img
                  width="40px"
                  height="40px"
                  src={`/foods-icon/${category.image}`}
                  alt={category.image.split(".")[0]}
                />
                <p
                  style={{
                    color: "darkslateblue",
                    fontFamily: "monospace",
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    marginTop: 5, // Resim ile yazı arası boşluk
                    marginBottom: 0, // Optional: remove any extra space below text
                  }}
                >
                  {category.name}
                </p>
              </SwiperSlide>
            ))
          ) : (
            <div style={{ display: "flex", textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  color: "darkslateblue",
                  fontSize: 18,
                }}
              >
                Any category not found.
              </p>
            </div>
          )}
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default CategoryList;
