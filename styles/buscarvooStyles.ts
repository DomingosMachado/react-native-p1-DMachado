import { StyleSheet } from "react-native";

const flightSearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    fontSize: 28,
    color: "#333",
  },
  title: {
    fontSize: 32,
    fontWeight: "400",
    marginBottom: 30,
    color: "#000",
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 30,
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    padding: 3,
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    borderRadius: 22,
    marginHorizontal: 2,
  },
  activeTab: {
    backgroundColor: "#000",
  },
  tabText: {
    color: "#888",
    fontSize: 14,
    fontWeight: "500",
  },
  activeTabText: {
    color: "#FFF",
  },
  input: {
    height: 60,
    borderWidth: 0,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: "#F8F8F8",
    fontSize: 16,
    color: "#333",
  },
  dateInput: {
    height: 60,
    borderWidth: 0,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: "#F8F8F8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  calendarIcon: {
    fontSize: 18,
  },
  dropdownInput: {
    height: 60,
    borderWidth: 0,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: "#F8F8F8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  dropdownValue: {
    fontSize: 16,
    color: "#333",
  },
  dropdownArrow: {
    fontSize: 16,
    color: "#666",
  },
  dropdown: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  dropdownOption: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  dropdownOptionText: {
    fontSize: 16,
    color: "#333",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#DDD",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  checkmark: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#333",
  },
  searchButton: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    marginTop: 20,
  },
  searchButtonText: {
    color: "#999",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default flightSearchStyles;
