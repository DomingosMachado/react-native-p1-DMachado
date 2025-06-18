import { StyleSheet } from "react-native";

const flightSearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9F9F9",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#000",
  },
  tabText: {
    color: "#FFF",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  smallInput: {
    flex: 1,
  },
  iconButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#FFA500",
    borderRadius: 5,
  },
  iconText: {
    color: "#FFF",
  },
  switchLabel: {
    marginLeft: 10,
  },
  searchButton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
  },
  searchButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default flightSearchStyles;
