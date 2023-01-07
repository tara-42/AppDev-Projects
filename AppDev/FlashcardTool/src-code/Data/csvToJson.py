import csv, json

csvFilePath = "data.csv"
jsonFilePath = "data.json"

data = {}
with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    #for csvRow in csvReader:
    data = list(csvReader)   
root = {}
root["cards"] = data
print(data)

with open (jsonFilePath, "w") as jsonFile:
    jsonFile.write(json.dumps(root, indent=4))

