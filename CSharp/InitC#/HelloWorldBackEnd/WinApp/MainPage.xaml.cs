using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at https://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409

namespace WinApp
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
		private const string BaseURL = "http://localhost:52736/api/Apprentices";
		private const string MediaTypeJSON = "application/json";

		public MainPage()
        {
            this.InitializeComponent();
        }

		private async void Button_Click(object sender, RoutedEventArgs e)
		{
			// using System.net.http
			var httpClient = new HttpClient();

			const string URL = BaseURL;
			var newUser = "{'Name':'William Gate III'}";
			Encoding uTF8 = Encoding.UTF8;

			var res = await httpClient.PostAsync(URL, content: new StringContent(newUser, uTF8, MediaTypeJSON));
		}

		private async void Button_Tapped(object sender, TappedRoutedEventArgs e)
		{
			// using System.net.http
			var httpClient = new HttpClient();

			const string URL = BaseURL; 
			var newUser = "{'Name':'William Gate III'}";
			Encoding uTF8 = Encoding.UTF8;

			var res = await httpClient.PostAsync(URL, content: new StringContent(newUser, uTF8, MediaTypeJSON));
		}
	}
}
