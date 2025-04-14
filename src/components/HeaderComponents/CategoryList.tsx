import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import API from "../../services/api-services";
import { Category } from "../../Models/Category";

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
      {allCategory.length > 0 && allCategory ? (
        allCategory.slice(0,10).map((category, index) => (
          <Grid
            key={index}
            sx={{
              width: "7%",
              textAlign: "center",
              mt: 2,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#d0e8ff",
                cursor: "pointer",
              },
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
                whiteSpace: "nowrap"
              }}
            >
              {category.name}
            </p>
          </Grid>
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
    </Grid>
  );
};

export default CategoryList;
