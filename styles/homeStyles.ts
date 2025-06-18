import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 68,
    paddingLeft: 24,
    justifyContent: "flex-start",
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 16,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "500",
  },
  title: {
    fontSize: 48,
  },
  searchButton: {
    backgroundColor: "#ff6600",
    padding: 18,
    borderRadius: 24,
    alignItems: "center",
    marginBottom: 24,
    width: "40%",
  },
  searchButtonText: {
    fontWeight: "600",
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
  menuItem: {
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
  },
  menuIcon: {
    backgroundColor: "#f3f3f3",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  menuText: {
    textAlign: "center",
    fontSize: 10,
    color: "#333",
  },
});
