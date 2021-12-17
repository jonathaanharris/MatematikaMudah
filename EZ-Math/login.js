function ambilData(e) {
  sessionStorage.setItem("username", document.getElementById("username").value);
  sessionStorage.setItem(
    "valueLevel",
    document.getElementById("valueLevel").value
  );
}