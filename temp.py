import pandas as pd

data = {'PM10': [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000],
        'PM50': [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000],
        }
df1 = pd.DataFrame(data)

Q1 = df1['PM10'].quantile(0.25)
Q3 = df1['PM10'].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

def encoding(x):
    if x < lower_bound: return lower_bound
    elif x > upper_bound: return upper_bound
    else: return x

df1['PM10']
df1['PM10'] = df1['PM10'].apply(encoding)
df1['PM10']