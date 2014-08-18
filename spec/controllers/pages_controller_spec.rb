require 'spec_helper'
require 'rails_helper'

#RSpec.describe PagesController, :type => :controller do
describe PagesController do
  render_views


  describe "GET 'home'" do
    it "should be successful" do
      get 'home'
    end

    #it "should have the right title" do
    #  get 'home'
    #  response.should have_selector("title",
    #                  :content=>"Ruby on Rails Tutorial Sample App | Home")
    #end
  end

  describe "GET 'contact'" do
    it "should be successful" do
      get 'contact'
    end
  end

  describe "GET 'about'" do
    it "should be successful" do
      get 'about'
    end
  end

end
